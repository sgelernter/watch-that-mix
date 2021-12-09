import {ALLSHAPES} from "./all_shapes";

const allCharts = ALLSHAPES;
const mixShapes = allCharts[0];
const eqShapes = allCharts[1];
const compShapes = allCharts[2];
const satShapes = allCharts[3];
const spaceShapes = allCharts[4];


const createCharts = function (container){
    allCharts.forEach ((chart) => {
        chart.forEach ((shape) => {
            container.append(shape);
        });
        hideShapes(chart, container);
    });
}

const handleMouseOver = function(event) {
        const keyBox = document.getElementById('chart-key');
        if (event.target.getAttribute('class') === 'shape') {
            // debugger
            keyBox.innerHTML = `This shape represents the: ${event.target.getAttribute('name')}`;
        };
    }

const handleMouseLeave = function(event) {
        const keyBox = document.getElementById('chart-key');
        if (event.target.getAttribute('class') !== 'shape') {
            keyBox.innerHTML = "";
        };
    }

const revealShapes = function(shapes, container){
    allCharts.forEach ((chart) => {hideShapes(chart, container)});
    shapes.forEach ((shape) => {
        shape.setAttribute('opacity', '85%');
    })
    container.addEventListener('mouseover', handleMouseOver);
    container.addEventListener('mouseleave', handleMouseLeave);
}

const hideShapes = function(shapes, container){
    shapes.forEach ((shape) => {
        shape.setAttribute('opacity', '0%');
        // console.log('see a shape do a thing');
    });
    // debugger
    container.removeEventListener('mouseover', handleMouseOver);
    container.removeEventListener('mouseleave', handleMouseLeave);
}


const revealChart = function(pagename, container) {
    switch (pagename) {
        case 'fullmix': 
            revealShapes(mixShapes, container);
            break;
        case 'eq': 
            revealShapes(eqShapes, container);
            break;
        case 'comp': 
            revealShapes(compShapes, container);
            break;
        case 'saturate': 
            revealShapes(satShapes, container);
            break;
        case 'spatial': 
            revealShapes(spaceShapes, container);
            break;
    }
}

export {createCharts, revealChart};
