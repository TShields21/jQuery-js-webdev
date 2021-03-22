import {characterData} from "./character.js";
import {scenes} from "./scenes.js";

// Populates the html needed for the 'sidebar' area with the character's stats
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

// Render the content for the main area
const renderMainArea = function(scene) {


    // return html here that renders the page with the img & text areas from the scenes.js
    return `
        <img src="${scene.img}">
        <div data-id=${scene.id}>${scene.content}</div>

    `
};

const renderTextBox = function(scene) {

return `<div class="textbox">
            <a class="text" data-id="${scene.id}">
                <p>${scene.textbox}</p>
            </a> 
            <div class="buttonContainer">
                <a class="save" href="save.html">Save</a>
                <a class="menu" href="menu.html">Menu</a>
            </div>
        </div>`

};

const handleTextPress = function(event) {
    let sceneId = event.target.getAttribute("data-id");
    sceneId++;
    let scene = [];
    scenes.forEach(el => {
        if (el.id == sceneId) {
            scene.push(el);
        }
    });
    const $main = $('.main');
    $main.empty();

    const mainContent = renderMainArea(scene[0]);
    $main.append(mainContent);

    const text = renderTextBox(scene[0]);
    $main.append(text);


}


// implement listener for when the save button is pressed to change the content of the main area

const handleSaveButton = function(event) {

};



// implement listener for when the cancel button is pressed to change the content of the main area
const handleCancelButton = function(event) {

};


const loadStatsIntoDOM = function(character, scenes) {
    const $side = $('.side');
    var bar =  renderStatsSidebar(character);
    $side.append(bar); 

    const $root = $('#root');

    const $main = $('.main');
    const main = renderMainArea(scenes[0]);
    const text = renderTextBox(scenes[0]);
    $main.append(main);
    $main.append(text);
    
    $root.on("click", ".textbox", handleTextPress);


    // Listener for the save button
    $root.on("click", ".save", handleSaveButton);

    // Listener for the cancel button
    $root.on("click", ".cancel", handleCancelButton);
    

    


};

$(function() {
    loadStatsIntoDOM(characterData, scenes);
});


