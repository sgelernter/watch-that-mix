import {ALLSHAPES} from "./all_shapes";

const allCharts = ALLSHAPES;
const mixShapes = allCharts[0];
const eqShapes = allCharts[1];
const compShapes = allCharts[2];
const satShapes = allCharts[3];
const spaceShapes = allCharts[4];

const createCharts = function (){
    const chartContainer = document.getElementById('chart-container');
    allCharts.forEach ((chart) => {
        chart.forEach ((shape) => {
            chartContainer.append(shape);
        });
        hideShapes(chart);
    });
}

const revealShapes = function(shapes){
    const keyBox = document.getElementById('chart-key');
    allCharts.forEach ((chart) => {hideShapes(chart)});
    shapes.forEach ((shape) => {
        shape.setAttribute('opacity', '85%');
        shape.addEventListener('mouseover', (e) => {
            keyBox.innerHTML = `This shape represents the: ${shape.getAttribute('name')}`;
        })
        shape.addEventListener('mouseleave', (e) => keyBox.innerHTML = "");
    })
}

const hideShapes = function(shapes){
    shapes.forEach ((shape) => {
        shape.setAttribute('opacity', '0%');
    })
}
const revealChart = function(pagename) {
    switch (pagename) {
        case 'fullmix': 
            revealShapes(mixShapes);
            break;
        case 'eq': 
            revealShapes(eqShapes);
            break;
        case 'comp': 
            revealShapes(compShapes);
            break;
        case 'saturate': 
            revealShapes(satShapes);
            break;
        case 'spatial': 
            revealShapes(spaceShapes);
            break;
    }
}

export {createCharts, revealChart};
