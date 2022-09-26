/* Initial DOM Manipulation */

initalizeDrawspace();
initializeButtonListener();

// Generate a width * width square grid of div elements within the drawspace div
function initalizeDrawspace(edge = 16) {
    const drawspace = document.querySelector('.drawspace');

    // Reset drawspace 'pixel' divs if called via button
    while(drawspace.hasChildNodes()) {
        drawspace.removeChild(drawspace.firstChild);
    }

    for(let i = 0; i < edge ** 2; i++) {
        etchableDiv = document.createElement('div');
        etchableDiv.classList.add('etchable');
        etchableDiv.style['width'] = (100 / edge) + '%';
        etchableDiv.style['aspect-ratio'] = '1 / 1';
        drawspace.appendChild(etchableDiv);
    }

    // Must call MouseOverListener after every initialization (including button clicks)
    initializeMouseOverListener();
}

function initializeMouseOverListener() {
    const etchables = document.querySelectorAll('.etchable');

    etchables.forEach(etchable => 
        etchable.addEventListener(  'mouseover', e => {
            console.log(e.target);
            e.target.style['background-color'] = 'black';
        },
        {
            once: true // Only need to activate once to color in full black, but will need to be removed to do the shading
        })
    );
}

function initializeButtonListener() {
    const gridButton = document.querySelector('button.grid');
    gridButton.addEventListener('click', e => {
        const newEdge = prompt("What would you like the edge length to be?");
        initalizeDrawspace(newEdge);
    });

    const solidButton = document.querySelector('button.solid');
    solidButton.addEventListener('click', e =>{

    });

    const grayButton = document.querySelector('button.grayscale');
    grayButton.addEventListener('click', e =>{

    });

    const rainbowButton = document.querySelector('button.rainbow');
    rainbowButton.addEventListener('click', e =>{

    });

    const hoverButton = document.querySelector('button.hovermode');
    hoverButton.addEventListener('click', e =>{

    });

    const holdButton = document.querySelector('button.holdmode');
    holdButton.addEventListener('click', e =>{

    });
}