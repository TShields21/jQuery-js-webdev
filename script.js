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
    ${scene.content}
    `
};

const renderTextBox = function(sceneText) {


    return `<p>${sceneText}</p>`

};


// implement listener for when the save button is pressed to change the content of the main area

const handleSaveButton = function(event) {

};



// implement listener for when the cancel button is pressed to change the content of the main area
const handleCancelButton = function(event) {

};


const loadStatsIntoDOM = function(character) {
    const $side = $('.side');
    var bar =  renderStatsSidebar(character);
    $side.append(bar); 

    // Listener for the save button
    const $root = $('.container');
    $root.on("click", ".save", handleSaveButton);

    // Listener for the cancel button
    $root.on("click", ".cancel", handleCancelButton);
    
    const $main = $('.main');
    const $textarea = $('.text');
    const $textbox = $('.textbox');

    scenes.forEach(scene => {
        $main.append(renderMainArea(scene));
        // Renders the text for every scene, proceeding through dialogue whenever the textbox is clicked
        scene.textbox.forEach(text => {
            $textarea.append(renderTextBox(text));
            // WRITE CODE FOR THE LOOP TO WAIT FOR THIS FUNCTION BEFORE IT CONTINUES
                $textarea.on("click", function() {
                    $textarea.empty();
                })


        });
    });

};

$(function() {
    loadStatsIntoDOM(characterData);
});


