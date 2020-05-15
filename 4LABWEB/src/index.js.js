import {start} from './js/profile.js'
import {render} from'./js/poke.js'


const poke = function () {
    render();
};
if(localStorage.id == 2){
    poke();
}
else{
    start();
}

const pokemonButton = document.getElementById('pokemon-button');
const infoButton = document.getElementById('info-button');

function pokemon(){
    poke();
    localStorage.id = 2;
}

pokemonButton.onclick = pokemon;
pokemonButton.removeEventListener('click', pokemon);

function info(){
    start();
    localStorage.id = 1;
}
infoButton.onclick = info;
infoButton.removeEventListener('click', info);


