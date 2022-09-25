/* Initial DOM Manipulation */

initalizeDrawspace();


// Generate a width * width square grid of div elements within the drawspace div
function initalizeDrawspace(edge = 16) {
    drawspace = document.querySelector('.drawspace');

    for(let i = 0; i < edge ** 2; i++) {
        etchableDiv = document.createElement('div');
        etchableDiv.style['width'] = (100 / edge) + '%';
        etchableDiv.style['aspect-ratio'] = '1 / 1';
        drawspace.appendChild(etchableDiv);
    }

}