import {characterData} from "./character.js";


const renderStatsSidebar = function(character) {

  return `
        <div class="box">
            <h2>Money: $${character.money}</h2>
        </div>
        <div class="box">
            <h2>Health: ${character.health}</h2>
        </div>
        <div class="box">
            <h2>Stress: ${character.stress}</h2>
        </div>
        <div class="character">
        </div>
        `; 
};


const loadStatsIntoDOM = function(character) {
    const $side = $('.side');
    var bar =  renderStatsSidebar(character);
    $side.append(bar); 
};

$(function() {
    loadStatsIntoDOM(characterData);
});



