/* Initial DOM Manipulation */

initalizeDrawspace();
initializeMouseOverListener();

// Generate a width * width square grid of div elements within the drawspace div
function initalizeDrawspace(edge = 16) {
    drawspace = document.querySelector('.drawspace');

    for(let i = 0; i < edge ** 2; i++) {
        etchableDiv = document.createElement('div');
        etchableDiv.classList.add('etchable');
        etchableDiv.style['width'] = (100 / edge) + '%';
        etchableDiv.style['aspect-ratio'] = '1 / 1';
        drawspace.appendChild(etchableDiv);
    }

}

function initializeMouseOverListener() {
    etchables = document.querySelectorAll('.etchable');

    etchables.forEach(etchable => 
        etchable.addEventListener('mouseover',
        e => {
            console.log(e.target);
            e.target.style['background-color'] = 'black';
        },
        {
            once: true // Only need to activate once to color in full black, but will need to be removed to do the shading
        })
    );
}