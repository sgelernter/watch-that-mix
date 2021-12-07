
export const graph = function() {
    
    const shapes = [];
    const ellipseInfo = [
        {name: 'ellipse', cx: "104.05", cy: "121.06", rx: "17.325", ry: "23.997"},
        {name: 'ellipse', cx: "107.48", cy: "19.8", rx: "96.525", ry: "9.9"},
        {name: 'ellipse', cx: "53.903", cy: "193.99", rx: "12.182", ry: "12.022"},
        {name: 'ellipse', cx: "166.59", cy: "202.61", rx: "12.182", ry: "12.022"},
        {name: 'ellipse', cx: "38.277", cy: "102.97", rx: "42.724", ry: "33.304", fill: "#fc0"},
        {name: 'ellipse', cx: "175.01", cy: "104.41", rx: "44.435", ry: "33.304", fill: "#fc0"}
    ]
    ellipseInfo.forEach ((shapeObj) => {
        const shape = document.createElementNS('http://www.w3.org/2000/svg', shapeObj.name);
            // debugger
        shape.setAttribute('cx', shapeObj.cx);
        shape.setAttribute('cy', shapeObj.cy);
        shape.setAttribute('rx', shapeObj.rx);
        shape.setAttribute('ry', shapeObj.ry);
        shape.setAttribute('fill', shapeObj.fill);
        shape.setAttribute('opacity', '0%');
        shapes.push(shape);  
    });
    
    const bass = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    bass.setAttribute('id', "FEATURED");
    bass.setAttribute('transform', "matrix(.495 0 0 .495 -18.75 0)");
    bass.setAttribute('d', "m250 440c-6.1636 0.0851-12.297 1.8813-17.445 5.2891-5.5062 3.6046-9.8046 8.9625-12.227 15.078-2.6567 6.8931-2.9208 14.715-0.52148 21.721 2.0681 6.3882 6.2894 12.022 11.736 15.934 5.6888 4.0477 12.724 6.2085 19.709 5.9121 7.1878-0.20303 14.229-2.9988 19.688-7.6641 4.8917-4.1975 8.4536-9.8893 10.107-16.121 2.2858-8.5426 0.83885-18-3.9902-25.424-5.7657-9.117-16.267-14.834-27.057-14.725z")
    bass.setAttribute('fill', "#00f");
    bass.setAttribute('fill-opacity', ".9");
    shapes.push(bass);
    return shapes;
}






// <!-- Created with Inkscape (http://www.inkscape.org/) -->
// <svg width="500px" height="600px" version="1.1" viewBox="0 0 210 297" xmlns="http://www.w3.org/2000/svg">
//  <g fill="#800000">

//  </g>
//  <path id="FEATURED-EL" transform="matrix(.495 0 0 .495 -18.75 0)" d="m250 440c-6.1636 0.0851-12.297 1.8813-17.445 5.2891-5.5062 3.6046-9.8046 8.9625-12.227 15.078-2.6567 6.8931-2.9208 14.715-0.52148 21.721 2.0681 6.3882 6.2894 12.022 11.736 15.934 5.6888 4.0477 12.724 6.2085 19.709 5.9121 7.1878-0.20303 14.229-2.9988 19.688-7.6641 4.8917-4.1975 8.4536-9.8893 10.107-16.121 2.2858-8.5426 0.83885-18-3.9902-25.424-5.7657-9.117-16.267-14.834-27.057-14.725z" fill="#00f" fill-opacity=".9"/>
//  <g>

//   <circle cx="103.81" cy="57.187" r="19.8" fill="#ffd42a" stroke-width=".495"/>
//   <circle cx="103.87" cy="263.94" r="22.275" fill="#800000" stroke-width=".495"/>
//  </g>
// </svg>


// const graphRender = document.createElement('img');
// graphRender.setAttributeNS(null, 'height', '600px');
// graphRender.setAttributeNS(null, 'width', '500px');
// // return graphRender;
// const c = document.createElement('circle');
// c.setAttribute('cx', '50%');
// c.setAttribute('cy', '50%');
// c.setAttribute('r', '50');
// c.setAttribute('fill', 'blue');
// c.setAttribute('id', 'dynamic-circle');
// return c;
// const shapeInfo = [
//     {name: "ellipse", cx: "38.277", cy: "102.97", rx: "42.724", ry: "33.304",  fill: "#fc0"},
//     {name: "ellipse", cx: "175.01", cy: "104.41", rx: "44.435", ry: "33.304",  fill: "#fc0"}]

// shapeInfo.forEach ((shapeObj) => {
    //     const shape = document.createElementNS('http://www.w3.org/2000/svg', shapeObj.name);
    //     // debugger
    //     shape.setAttribute('cx', shapeObj.cx);
    //     shape.setAttribute('cy', shapeObj.cy);
    //     shape.setAttribute('rx', shapeObj.rx);
    //     shape.setAttribute('ry', shapeObj.ry);
    //     shape.setAttribute('fill', shapeObj.fill);
    //     shapes.push(shape);  
    // });