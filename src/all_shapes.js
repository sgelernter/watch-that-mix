const allShapes = []

const fullMixChart = function() {
    
    const shapes = [];
    const shapeInfo = [{name: 'rect',
       id: "rect4831",
       fill: "#aa8800",
       width: "154.1391",
       height: "30.06749",
       x: "30.113682",
       y: "68.998169" },
    {name: 'rect',
       id: "rect4409",
       fill: "#ffd42a",
       width: "212.20045",
       height: "88.820061",
       x: "1.0830251",
       y: "109.08817" },
    {name: 'ellipse',
       id: "path147",
       fill: "#800080",
       cx: "103.72721",
       cy: "202.22826",
       rx: "81.216789",
       ry: "34.041931" },
    {name: 'ellipse',
       id: "path273",
       fill: "#000080",
       cx: "104.41842",
       cy: "146.58612",
       rx: "40.089989",
       ry: "24.365036" },
    {name: 'ellipse',
       id: "path3153",
       fill: "#483737",
       cx: "102.69041",
       cy: "269.62091",
       rx: "45.61964",
       ry: "16.070555",
       transform: "matrix(0.95682691,0,0,1.3505624,4.4334624,-102.12223)" },
    {name: 'ellipse',
       id: "path2725",
       fill: "#2b0000",
       cx: "101.48079",
       cy: "258.216",
       rx: "18.489779",
       ry: "17.452969" },
    {name: 'ellipse',
       id: "path3515",
       fill: "#000080",
       cx: "29.768105",
       cy: "212.42355",
       rx: "23.155424",
       ry: "21.081804" },
    {name: 'ellipse',
       id: "path3517",
       fill: "#000080",
       cx: "185.98082",
       cy: "209.48593",
       rx: "22.118614",
       ry: "20.217796" },
    {name: 'ellipse',
       id: "path3939",
       fill: "#ff00ff",
       cx: "106.66484",
       cy: "95.436829",
       rx: "95.213722",
       ry: "11.232109" },
    {name: 'ellipse',
       id: "path4163",
       fill: "#c83737",
       cx: "104.07282",
       cy: "72.108604",
       rx: "23.84663",
       ry: "22.118614" },
    {name: 'ellipse',
       id: "path3719",
       fill: "#008000",
       cx: "104.76403",
       cy: "117.03703",
       rx: "32.141109",
       ry: "31.449905" },
    {name: 'ellipse',
       id: "path4285",
       fill: "#ffd42a",
       cx: "153.3213",
       cy: "25.279348",
       rx: "54.77813",
       ry: "12.614522" },
    {name: 'ellipse',
       id: "path4287",
       fill: "#ffd42a",
       cx: "40.827412",
       cy: "30.117794",
       rx: "29.721888",
       ry: "17.452969" }
    ]

    shapeInfo.forEach ((shapeObj) => {
        const shape = document.createElementNS('http://www.w3.org/2000/svg', shapeObj.name);
        // debugger
        if (shapeObj.cx) {shape.setAttribute('cx', shapeObj.cx)};
        if (shapeObj.cy) {shape.setAttribute('cy', shapeObj.cy)};
        if (shapeObj.rx) {shape.setAttribute('rx', shapeObj.rx)};
        if (shapeObj.ry) {shape.setAttribute('ry', shapeObj.ry)};
        if (shapeObj.width) {shape.setAttribute('width', shapeObj.width)};
        if (shapeObj.height) {shape.setAttribute('height', shapeObj.height)};
        if (shapeObj.x) {shape.setAttribute('x', shapeObj.x)};
        if (shapeObj.y) {shape.setAttribute('y', shapeObj.y)};
        if (shapeObj.transform) {shape.setAttribute('transform', shapeObj.transform)};
        if (shapeObj.fill) {shape.setAttribute('fill', shapeObj.fill)}
        shape.setAttribute ('opacity', '80%');
        shape.setAttribute('class', 'shape');
        shapes.push(shape);  
    });
    allShapes.push(shapes);
}

const eqChart = function() {

}

const compChart = function() {

}

const saturateChart = function() {

}

const spaceChart = function() {

}

fullMixChart();
eqChart();
compChart();
saturateChart();
spaceChart();

export const ALLSHAPES = allShapes;
