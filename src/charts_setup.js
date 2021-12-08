import * as charts from './all_shapes';

const createCharts = function (){
    const chartContainer = document.getElementById('chart-container');
    const shapes = charts.allShapes[0];
    shapes.forEach ((shape) => {
        chartContainer.append(shape);
    });
    hideShapes(shapes);
}

const revealShapes = function(shapes){
    shapes.forEach ((shape) => {
        shape.setAttribute('visibility', 'visible');
    })
}

const hideShapes = function(shapes){
    shapes.forEach ((shape) => {
        shape.setAttribute('visiblity', 'hidden');
    })
}
const revealChart = function(pagename) {
    switch (pagename) {
        case 'fullmix': 
            revealShapes(charts.fullMixChart());
            break;
        case 'eq': 
            revealShapes(charts.eqChart());
            break;
        case 'comp': 
            revealShapes(charts.compChart());
            break;
        case 'saturate': 
            revealShapes(charts.saturateChart());
            break;
        case 'spatial': 
            revealShapes(charts.spaceChart());
            break;
    }
}

export {createCharts, revealChart};
