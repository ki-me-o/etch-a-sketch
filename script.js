/* Initialize variables */
let currentEdge;


/* Initial DOM Manipulation */

initalizeDrawspace();
initializeButtonListener();

/* Define Functions */

// Generate a width * width square grid of div elements within the drawspace div
function initalizeDrawspace(edge = 16) {
    const drawspace = document.querySelector('.drawspace');
    currentEdge = edge;

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


function resetEtchable(etchable) {
    var new_etchable = etchable.cloneNode(true);
    etchable.parentNode.replaceChild(new_etchable, etchable); 
    return new_etchable;
}

function initializeMouseOverListener(color = 'black', options = {once: true}) {
    const etchables = document.querySelectorAll('.etchable');

    switch(color) {
        case 'black':
            etchables.forEach(etchable => {
            
                etchable = resetEtchable(etchable);

                etchable.addEventListener(  'mouseover', e => {
                    e.target.style['background-color'] = color;
                },
                options)
            }
        ); break;
        case 'grayscale':
            etchables.forEach(etchable => {
                etchable = resetEtchable(etchable);

                etchable.addEventListener('mouseover', e => {
                    let rgb = e.target.style['background-color'];
                    rgb = rgb.replace(/[^\d,]/g,'').split(',');
                    if (rgb[0] != rgb[1] || rgb[1] != rgb[2]) {
                        e.target.style['background-color'] = 'rgb(255,255,255)';
                        return;
                    } else {
                        for(let i = 0; i < 3; i++) {
                            rgb[i] = parseInt(rgb[i]) - (255 / 10);
                        }
                        e.target.style['background-color'] = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
                    }
                },
                options)
            }); break;
        case 'rainbow':
            etchables.forEach(etchable => {
                etchable = resetEtchable(etchable);
                etchable.addEventListener( 'mouseover', e =>  {
                    const r = Math.random() * 255;
                    const g = Math.random() * 255;
                    const b = Math.random() * 255;
                    e.target.style['background-color'] = 'rgb(' + r + ',' + g + ',' + b + ')';
                },
                options)
        }); break;
    }



}

function initializeButtonListener() {
    const gridButton = document.querySelector('button.grid');
    gridButton.addEventListener('click', e => {
        const newEdge = prompt("What would you like the edge length to be?");
        initalizeDrawspace(newEdge);
    });

    const clearButton = document.querySelector('button.clear');
    clearButton.addEventListener('click', e =>{
        initalizeDrawspace(currentEdge);
    });

    const solidButton = document.querySelector('button.solid');
    solidButton.addEventListener('click', e =>{
        initializeMouseOverListener('black', { once: false });
    });

    const grayButton = document.querySelector('button.grayscale');
    grayButton.addEventListener('click', e =>{
        initializeMouseOverListener('grayscale', {once: false});
    });

    const rainbowButton = document.querySelector('button.rainbow');
    rainbowButton.addEventListener('click', e =>{
        initializeMouseOverListener('rainbow', {once: false});
    });

    const hoverButton = document.querySelector('button.hovermode');
    hoverButton.addEventListener('click', e =>{

    });

    const holdButton = document.querySelector('button.holdmode');
    holdButton.addEventListener('click', e =>{
        e.target.disabled = true;
    });
}