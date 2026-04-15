(function () {
  'use strict';

  /* ============================================================
     SCROLL REVEAL
     ============================================================ */

  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = parseInt(entry.target.dataset.delay || '0', 10);
          if (delay > 0) {
            setTimeout(function () { entry.target.classList.add('visible'); }, delay);
          } else {
            entry.target.classList.add('visible');
          }
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ============================================================
     SCROLL PROGRESS BAR
     ============================================================ */

  var progressBar = document.createElement('div');
  progressBar.id = 'scroll-progress';
  document.body.appendChild(progressBar);

  function updateProgress() {
    var scrolled = window.scrollY;
    var total = document.documentElement.scrollHeight - window.innerHeight;
    if (total > 0) {
      progressBar.style.width = (scrolled / total * 100) + '%';
    }
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  /* ============================================================
     CURSOR GLOW (desktop only)
     ============================================================ */

  if (window.matchMedia('(pointer: fine)').matches) {
    var glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    var mouseX = window.innerWidth / 2;
    var mouseY = window.innerHeight / 2;
    var glowX = mouseX;
    var glowY = mouseY;
    var glowActive = false;

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!glowActive) {
        glowActive = true;
        glow.style.opacity = '1';
        animateGlow();
      }
    });

    document.addEventListener('mouseleave', function () {
      glow.style.opacity = '0';
      glowActive = false;
    });

    function animateGlow() {
      if (!glowActive) return;
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      glow.style.transform = 'translate(' + (glowX - 300) + 'px, ' + (glowY - 300) + 'px)';
      requestAnimationFrame(animateGlow);
    }
  }

  /* ============================================================
     CARD SPOTLIGHT (cursor-tracked radial glow inside cards)
     ============================================================ */

  function attachSpotlight(selector) {
    document.querySelectorAll(selector).forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        card.style.setProperty('--spot-x', (e.clientX - rect.left) + 'px');
        card.style.setProperty('--spot-y', (e.clientY - rect.top) + 'px');
      });
    });
  }

  attachSpotlight('.project');
  attachSpotlight('.timeline-card');
  attachSpotlight('.education-card');
  attachSpotlight('.about-card');
  attachSpotlight('.contact-card');

  /* ============================================================
     NAV — HAMBURGER ↔ X + TAP OUTSIDE TO CLOSE
     ============================================================ */

  var navCheck = document.getElementById('check');
  var checkIcon = document.querySelector('.checkbtn i');
  var navMenu = document.querySelector('nav ul');

  if (navCheck && checkIcon) {
    navCheck.addEventListener('change', function () {
      if (navCheck.checked) {
        checkIcon.classList.remove('fa-bars');
        checkIcon.classList.add('fa-times');
      } else {
        checkIcon.classList.remove('fa-times');
        checkIcon.classList.add('fa-bars');
      }
    });
  }

  if (navCheck && navMenu) {
    navMenu.addEventListener('click', function (e) {
      if (e.target === navMenu) {
        navCheck.checked = false;
        if (checkIcon) {
          checkIcon.classList.remove('fa-times');
          checkIcon.classList.add('fa-bars');
        }
      }
    });
  }

})();
