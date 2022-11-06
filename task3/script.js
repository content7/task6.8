const green = document.querySelector('#green');
const yellow = document.querySelector('#yellow');
const red = document.querySelector('#red');


function makeGreen() {
    green.style.background = ('green');
    yellow.style.background = ('black');
    red.style.background = ('black');
    green.removeEventListener('click', makeGreen);
    green.addEventListener('click', makeYellow);
    yellow.addEventListener('click', makeYellow);
    yellow.removeEventListener('click', makeGreen);
    red.addEventListener('click', makeYellow);
    red.removeEventListener('click', makeGreen);
    
}


function makeYellow() {
    green.style.background = ('black');
    yellow.style.background = ('yellow');
    red.style.background = ('black');
    yellow.removeEventListener('click', makeYellow);
    yellow.addEventListener('click', makeRed);
    green.removeEventListener('click', makeYellow);
    green.addEventListener('click', makeRed);
    red.removeEventListener('click', makeYellow);
    red.addEventListener('click', makeRed);
}


function makeRed() {
    green.style.background = ('black');
    yellow.style.background = ('black');
    red.style.background = ('red');
    red.removeEventListener('click', makeRed);
    red.addEventListener('click', makeGreen);
    yellow.removeEventListener('click', makeRed);
    yellow.addEventListener('click', makeGreen);
    green.removeEventListener('click', makeRed);
    green.addEventListener('click', makeGreen);
}

green.addEventListener('click', makeGreen);
yellow.addEventListener('click', makeGreen);
red.addEventListener('click', makeGreen);




