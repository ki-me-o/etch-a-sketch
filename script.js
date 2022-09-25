/* Initial DOM Manipulation */

initalizeDrawspace();


// Generate a width * width square grid of div elements within the drawspace div
function initalizeDrawspace(width = 16) {
    drawspace = document.querySelector('.drawspace');
    
    for(let i = 0; i < width ** 2; i++) {
        drawspace.appendChild(document.createElement('div'));
    }

}