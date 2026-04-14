function createCarousel(sliderClass, images) {
    var sliderImg = document.querySelector('.' + sliderClass + '-slider-img');
    if (!sliderImg) return { prev: function(){}, next: function(){} };
    var index = 0;

    function setImg(i) {
        sliderImg.setAttribute('src', 'images/' + images[i]);
    }

    return {
        prev: function() {
            index = index <= 0 ? images.length - 1 : index - 1;
            setImg(index);
        },
        next: function() {
            index = index >= images.length - 1 ? 0 : index + 1;
            setImg(index);
        }
    };
}

var s23 = createCarousel('s23', [
    'travel/s23/copenhagen1.jpeg', 'travel/s23/copenhagen2.jpeg', 'travel/s23/flam1.jpeg',
    'travel/s23/flam2.jpeg', 'travel/s23/flam3.jpeg', 'travel/s23/flam4.jpeg',
    'travel/s23/solvorn.HEIC.jpeg', 'travel/s23/como.jpeg', 'travel/s23/burrata.jpeg',
    'travel/s23/pasta.jpeg', 'travel/s23/gelato.jpeg', 'travel/s23/london1.jpeg',
    'travel/s23/london2.jpeg', 'travel/s23/london3.jpeg'
]);

var ny = createCarousel('ny', [
    'travel/NewYork/wallstreet.jpg', 'travel/NewYork/BrooklynBridge.jpg', 'travel/NewYork/aladdin.jpg',
    'travel/NewYork/brooklyn.jpeg', 'travel/NewYork/nyse.png', 'travel/NewYork/pizza.jpg',
    'travel/NewYork/rockefeller.jpg', 'travel/NewYork/riggatoni.jpg', 'travel/NewYork/hazelnut.jpg'
]);

var spain = createCarousel('spain', [
    'travel/Spain/barcelona.jpeg', 'travel/Spain/campnou.jpeg', 'travel/Spain/churros.jpeg',
    'travel/Spain/madrid cathedral.jpeg', 'travel/Spain/madrid royal palace.jpeg',
    'travel/Spain/madrid.jpeg', 'travel/Spain/madrid2.jpeg', 'travel/Spain/sagrada.jpeg'
]);

var s22 = createCarousel('s22', [
    'travel/Summer2022/vienna.jpeg', 'travel/Summer2022/vienna2.jpeg', 'travel/Summer2022/sp.jpeg',
    'travel/Summer2022/hofburg.jpeg', 'travel/Summer2022/Wiener Stand.jpeg', 'travel/Summer2022/bratislava.jpeg',
    'travel/Summer2022/BudapestNightSkyline.jpeg', 'travel/Summer2022/St. Stephens Basilica.jpeg',
    'travel/Summer2022/Hungarian Parliament.jpeg', 'travel/Summer2022/Fishermans Bastion.jpeg',
    'travel/Summer2022/Prague Square.jpeg', 'travel/Summer2022/Prague.jpeg',
    'travel/Summer2022/Prague Clock.jpeg', 'travel/Summer2022/Prague Gelato.jpeg'
]);

var italy = createCarousel('italy', [
    'travel/Italy/fabro.jpeg', 'travel/Italy/siena.jpeg', 'travel/Italy/Siena duomo.jpeg',
    'travel/Italy/florence.jpeg', 'travel/Italy/florenceduomo.jpeg', 'travel/Italy/david.jpeg',
    'travel/Italy/Colosseum.jpeg', 'travel/Italy/pantheon.jpeg', 'travel/Italy/romafutbalmatch2.jpeg',
    'travel/Italy/spanishsteps.jpeg', 'travel/Italy/trevi fountain.jpeg', 'travel/Italy/trevifountain2.jpeg',
    'travel/Italy/vatican.jpeg', 'travel/Italy/Burrata.jpeg', 'travel/Italy/canolli.jpeg',
    'travel/Italy/Croissants.jpeg', 'travel/Italy/gelato.jpeg', 'travel/Italy/pestopasta.jpeg',
    'travel/Italy/pestoravioli.jpeg', 'travel/Italy/pizza.jpeg', 'travel/Italy/trufflepasta.jpeg'
]);

var pre = createCarousel('pre', [
    'travel/2019/1.jpeg', 'travel/2019/2.jpeg', 'travel/2019/3.jpeg', 'travel/2019/4.jpeg',
    'travel/2019/5.jpeg', 'travel/2019/6.jpeg', 'travel/2019/7.jpeg', 'travel/2019/8.jpeg',
    'travel/2019/9.jpeg', 'travel/2019/10.jpeg', 'travel/2019/11.jpeg', 'travel/2019/12.jpeg',
    'travel/2019/13.jpeg', 'travel/2019/14.jpeg', 'travel/2019/15.jpeg', 'travel/2019/16.jpeg',
    'travel/2019/17.jpeg', 'travel/2019/18.jpeg'
]);

function s23prev()   { s23.prev(); }
function s23next()   { s23.next(); }
function nyprev()    { ny.prev(); }
function nynext()    { ny.next(); }
function spainprev() { spain.prev(); }
function spainnext() { spain.next(); }
function s22prev()   { s22.prev(); }
function s22next()   { s22.next(); }
function italyprev() { italy.prev(); }
function italynext() { italy.next(); }
function preprev()   { pre.prev(); }
function prenext()   { pre.next(); }
