
export const renderStatsSidebar = function(character) {
    // TODO: Generate HTML elements to represent the info

  return `<div class="box">
    <h2>Name: ${character.name}</h2>
    </div>
    <div class="box">
    <h2>Health: ${character.health}</h2>
    </div>
    <div class="box">
    <h2>Stress: ${character.stress}</h2>
    </div>`;
};


export const loadStatsIntoDOM = function(character) {
    const $side = $('.side');

    // GENERATE INFO 
   var name =  renderStatsSidebar(character);
    // APPEND INFO TO $var
    $side.append(name);
};

$(function() {
    loadStatsIntoDOM(characterData);
});

