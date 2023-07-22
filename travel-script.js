// Summer23
var s23SliderImg = document.querySelector('.s23-slider-img');
var s23Images = ['travel/s23/copenhagen1.jpeg', 'travel/s23/copenhagen2.jpeg', 'travel/s23/flam1.jpeg',
'travel/s23/flam2.jpeg', 'travel/s23/flam3.jpeg', 'travel/s23/flam4.jpeg',
'travel/s23/solvorn.HEIC.jpeg', 'travel/s23/como.jpeg', 'travel/s23/burrata.jpeg',
'travel/s23/pasta.jpeg', 'travel/s23/gelato.jpeg', 'travel/s23/london1.jpeg',
'travel/s23/london2.jpeg', 'travel/s23/london3.jpeg'];
var s23Index = 0;

function s23prev() {
    if (s23Index <= 0) {
        s23Index = ns23Images.length - 1;
    } else {
        s23Index--;
    }
    s23setImg(s23Index);
}

function s23next() {
    if (s23Index >= s23Images.length - 1) {
        s23Index = 0;
    } else {
        s23Index++;
    }
    s23setImg(s23Index);
}

function s23setImg(index) {
    s23SliderImg.setAttribute('src', "images/" + s23Images[index]);
}

// NY
var nySliderImg = document.querySelector('.ny-slider-img');
var nyImages = ['travel/NewYork/wallstreet.jpg', 'travel/NewYork/BrooklynBridge.jpg', 'travel/NewYork/aladdin.jpg', 'travel/NewYork/brooklyn.jpeg', 'travel/NewYork/nyse.png', 'travel/NewYork/pizza.jpg', 'travel/NewYork/rockefeller.jpg', 'travel/NewYork/riggatoni.jpg', 'travel/NewYork/hazelnut.jpg'];
var nyIndex = 0;

function nyprev() {
    if (nyIndex <= 0) {
        nyIndex = nyImages.length - 1;
    } else {
        nyIndex--;
    }
    nysetImg(nyIndex);
}

function nynext() {
    if (nyIndex >= nyImages.length - 1) {
        nyIndex = 0;
    } else {
        nyIndex++;
    }
    nysetImg(nyIndex);
}

function nysetImg(index) {
    nySliderImg.setAttribute('src', "images/" + nyImages[index]);
}


// Spain
var spainSliderImg = document.querySelector('.spain-slider-img');
var spainImages = ['travel/Spain/barcelona.jpeg', 'travel/Spain/campnou.jpeg', 'travel/Spain/churros.jpeg', 'travel/Spain/madrid cathedral.jpeg', 'travel/Spain/madrid royal palace.jpeg', 'travel/Spain/madrid.jpeg', 'travel/Spain/madrid2.jpeg', 'travel/Spain/sagrada.jpeg'];
var spainIndex = 0;

function spainprev() {
    if (spainIndex <= 0) {
        spainIndex = spainImages.length - 1;
    } else {
        spainIndex--;
    }
    spainsetImg(spainIndex);
}

function spainnext() {
    if (spainIndex >= spainImages.length - 1) {
        spainIndex = 0;
    } else {
        spainIndex++;
    }
    spainsetImg(spainIndex);
}

function spainsetImg(index) {
    spainSliderImg.setAttribute('src', "images/" + spainImages[index]);
}

// Summer 2022
var s22SliderImg = document.querySelector('.s22-slider-img');
var s22Images = ['travel/Summer2022/vienna.jpeg', 'travel/Summer2022/vienna2.jpeg', 'travel/Summer2022/sp.jpeg', 'travel/Summer2022/hofburg.jpeg', 'travel/Summer2022/Wiener Stand.jpeg', 'travel/Summer2022/bratislava.jpeg', 'travel/Summer2022/BudapestNightSkyline.jpeg', 'travel/Summer2022/St. Stephens Basilica.jpeg', 'travel/Summer2022/Hungarian Parliament.jpeg', 'travel/Summer2022/Fishermans Bastion.jpeg', 'travel/Summer2022/Prague Square.jpeg', 'travel/Summer2022/Prague.jpeg', 'travel/Summer2022/Prague Clock.jpeg', 'travel/Summer2022/Prague Gelato.jpeg'];
var s22Index = 0;

function s22prev() {
    if (s22Index <= 0) {
        s22Index = s22Images.length - 1;
    } else {
        s22Index--;
    }
    s22setImg(s22Index);
}

function s22next() {
    if (s22Index >= s22Images.length - 1) {
        s22Index = 0;
    } else {
        s22Index++;
    }
    s22setImg(s22Index);
}

function s22setImg(index) {
    s22SliderImg.setAttribute('src', "images/" + s22Images[index]);
}

// Italy 2021
var italySliderImg = document.querySelector('.italy-slider-img');
var italyImages = ['travel/Italy/fabro.jpeg', 'travel/Italy/siena.jpeg', 'travel/Italy/Siena duomo.jpeg', 'travel/Italy/florence.jpeg', 'travel/Italy/florenceduomo.jpeg', 'travel/Italy/david.jpeg', 'travel/Italy/Colosseum.jpeg', 'travel/Italy/pantheon.jpeg', 'travel/Italy/romafutbalmatch2.jpeg', 'travel/Italy/spanishsteps.jpeg', 'travel/Italy/trevi fountain.jpeg', 'travel/Italy/trevifountain2.jpeg', 'travel/Italy/vatican.jpeg', 'travel/Italy/Burrata.jpeg', 'travel/Italy/canolli.jpeg', 'travel/Italy/Croissants.jpeg', 'travel/Italy/gelato.jpeg', 'travel/Italy/pestopasta.jpeg', 'travel/Italy/pestoravioli.jpeg', 'travel/Italy/pizza.jpeg', 'travel/Italy/trufflepasta.jpeg'];
var italyIndex = 0;

function italyprev() {
    if (italyIndex <= 0) {
        italyIndex = italyImages.length - 1;
    } else {
        italyIndex--;
    }
    italysetImg(italyIndex);
}

function italynext() {
    if (italyIndex >= italyImages.length - 1) {
        italyIndex = 0;
    } else {
        italyIndex++;
    }
    italysetImg(italyIndex);
}

function italysetImg(index) {
    italySliderImg.setAttribute('src', "images/" + italyImages[index]);
}

// 2019
var preSliderImg = document.querySelector('.pre-slider-img');
var preImages = ['travel/2019/1.jpeg', 'travel/2019/2.jpeg', 'travel/2019/3.jpeg', 'travel/2019/4.jpeg', 'travel/2019/5.jpeg', 'travel/2019/6.jpeg', 'travel/2019/7.jpeg', 'travel/2019/8.jpeg', 'travel/2019/9.jpeg', 'travel/2019/10.jpeg', 'travel/2019/11.jpeg', 'travel/2019/12.jpeg', 'travel/2019/13.jpeg', 'travel/2019/14.jpeg', 'travel/2019/15.jpeg', 'travel/2019/16.jpeg', 'travel/2019/17.jpeg', 'travel/2019/18.jpeg'];
var preIndex = 0;

function preprev() {
    if (preIndex <= 0) {
        preIndex = preImages.length - 1;
    } else {
        preIndex--;
    }
    presetImg(preIndex);
}

function prenext() {
    if (preIndex >= preImages.length - 1) {
        preIndex = 0;
    } else {
        preIndex++;
    }
    presetImg(preIndex);
}

function presetImg(index) {
    preSliderImg.setAttribute('src', "images/" + preImages[index]);
}
