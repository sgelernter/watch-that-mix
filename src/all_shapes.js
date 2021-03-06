const allShapes = []

const createShapes = function(shapesArr){
   const shapes = [];
   shapesArr.forEach ((shapeObj) => {
      const shape = document.createElementNS('http://www.w3.org/2000/svg', shapeObj.type);
      if (shapeObj.name) {shape.setAttribute('name', shapeObj.name)};
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
      shapeObj.class ? shape.setAttribute('class', 'shape-featured') : shape.setAttribute('class', 'shape'); 
      shapes.push(shape);  
   });
   allShapes.push(shapes);
}

const fullMixArray = [
    {type: 'rect',
       id: "rect4831",
       fill: "#aa8800",
       width: "154.1391",
       height: "30.06749",
       x: "30.113682",
       y: "68.998169",
       name:  "snare effects"},,
    {type: 'rect',
       id: "rect4409",
       fill: "#ffd42a",
       width: "212.20045",
       height: "88.820061",
       x: "1.0830251",
       y: "109.08817",
       name: "keyboard effects"},,
    {type: 'ellipse',
       id: "path147",
       fill: "#800080",
       cx: "103.72721",
       cy: "202.22826",
       rx: "81.216789",
       ry: "34.041931",
       name:  "low synth pad"},,
    {type: 'ellipse',
       id: "path273",
       fill: "#000080",
       cx: "104.41842",
       cy: "146.58612",
       rx: "40.089989",
       ry: "24.365036",
       name:  "lead synth"},,
    {type: 'ellipse',
       id: "path3153",
       fill: "#483737",
       cx: "102.69041",
       cy: "269.62091",
       rx: "45.61964",
       ry: "16.070555",
       transform: "matrix(0.95682691,0,0,1.3505624,4.4334624,-102.12223)",
       name:  "808"},,
    {type: 'ellipse',
       id: "path2725",
       fill: "#2b0000",
       cx: "101.48079",
       cy: "258.216",
       rx: "18.489779",
       ry: "17.452969",
       name:  "kick drum"},,
    {type: 'ellipse',
       id: "path3515",
       fill: "#000080",
       cx: "29.768105",
       cy: "212.42355",
       rx: "23.155424",
       ry: "21.081804",
       name:  "left keyboard"},,
    {type: 'ellipse',
       id: "path3517",
       fill: "#000080",
       cx: "185.98082",
       cy: "209.48593",
       rx: "22.118614",
       ry: "20.217796",
       name:  "right keyboard"},,
    {type: 'ellipse',
       id: "path3939",
       fill: "#ff00ff",
       cx: "106.66484",
       cy: "95.436829",
       rx: "95.213722",
       ry: "11.232109",
       name:  "high bleep bloop synths"},,
    {type: 'ellipse',
       id: "path4163",
       fill: "#c83737",
       cx: "104.07282",
       cy: "72.108604",
       rx: "23.84663",
       ry: "22.118614",
       name:  "snare drum"},,
    {type: 'ellipse',
       id: "path3719",
       fill: "#008000",
       cx: "104.76403",
       cy: "117.03703",
       rx: "32.141109",
       ry: "31.449905",
       name:  "vocal"},,
    {type: 'ellipse',
       id: "path4285",
       fill: "#ffd42a",
       cx: "153.3213",
       cy: "25.279348",
       rx: "54.77813",
       ry: "12.614522",
       name:  "crash cymbal"},,
    {type: 'ellipse',
       id: "path4287",
       fill: "#ffd42a",
       cx: "40.827412",
       cy: "30.117794",
       rx: "29.721888",
       ry: "17.452969",
       name:  "hi hat"},
    ]

const eqArray = [
   {type: 'ellipse',
      fill: "#782121",
      id: "path16502",
      cx: "102.86321",
      cy: "213.80598",
      rx: "25.401846",
      ry: "25.229044",
      name: "bass"},
   {type: 'ellipse',
      fill: "#501616",
      id: "path15611",
      cx: "102.51761",
      cy: "254.41435",
      rx: "35.078739",
      ry: "31.622705",
      name: "kick drum"},
   {type: 'ellipse',
      fill: "#ffd42a",
      id: "path16950",
      cx: "60.008392",
      cy: "61.913307",
      rx: "17.107367",
      ry: "17.107365",
      name: "cymbal"},
   {type: 'ellipse',
      fill: "#ffcc00",
      id: "path17174",
      cx: "160.92458",
      cy: "35.129044",
      rx: "47.866001",
      ry: "19.353786",
      name: "cymbal"},
   {type: 'ellipse',
      fill: "#ffcc00",
      id: "path17176",
      cx: "33.396938",
      cy: "35.301846",
      rx: "24.365036",
      ry: "18.489779",
      name: "cymbal"},
   {type: 'ellipse',
      fill: "#c83737",
      id: "path17302",
      cx: "50.504307",
      cy: "201.01863",
      rx: "24.88344",
      ry: "26.611458",
      name: "floor tom"},
   {type: 'ellipse',
      fill: "#c83737",
      id: "path17304",
      cx: "156.60452",
      cy: "182.70168",
      rx: "24.537836",
      ry: "25.574648",
      name: "rack tom"},
   {type: 'ellipse',
      fill: "#c83737",
      id: "path16730",
      cx: "102.86319",
      cy: "138.46445",
      rx: "21.945812",
      ry: "21.427408",
      name: "snare"},
  {type: 'ellipse',
     class: "featured",
     fill: "#008080",
     id: "path17938",
     cx: "104.07281",
     cy: "112.8898",
     rx: "46.656452",
     ry: "17.625771",
     name: "guitar harmony ('guitarmony')"},
  {type: 'ellipse',
     class: "featured",
     fill: "#000080",
     id: "path17532",
     cx: "47.221073",
     cy: "154.3622",
     rx: "44.41003",
     ry: "31.449905",
     name: "left-panned guitar"},
  {type: 'ellipse',
     class: "featured",
     fill: "#000080",
     id: "path17534",
     cx: "163.34381",
     cy: "151.77017",
     rx: "42.682014",
     ry: "26.78426",
     name: "right-panned guitar"},
  {type: 'ellipse',
     class: "featured",
     fill: "#00ffff",
     id: "path17736",
     cx: "102.51759",
     cy: "79.711876",
     rx: "30.931499",
     ry: "25.920252",
     name: "lead guitar"}
]

const compArray = [
   {type: 'rect', 
   fill: "#ffaaaa",
   id: "rect8022",
   width: "87.783249",
   height: "34.214733",
   x: "59.48999",
   y: "169.91434",
   name: "snare effecs"},
   {type: 'rect',
   fill: "#ffcc00",
   id: "rect7134",
   width: "187.66261",
   height: "49.42128",
   x: "10.068712",
   y: "88.697563",
   name: "vocal effects"},
   {type: 'ellipse',
   fill: "#008000",
   id: "path7256",
   cx: "144.16281",
   cy: "145.89491",
   rx: "36.288353",
   ry: "37.497963",
   name: "keyboard"},
   {type: 'ellipse',
   fill: "#a02c2c",
   id: "path6436",
   cx: "101.8264",
   cy: "152.28857",
   rx: "46.138046",
   ry: "12.787324",
   name: "handclaps"},
   {type: 'ellipse',
   fill: "#501616",
   id: "path6094",
   cx: "101.48079",
   cy: "271.69452",
   rx: "52.70451",
   ry: "12.960126",
   name: "808"},
   {type: 'ellipse',
   fill: "#000080",
   id: "path6558",
   cx: "102.3448",
   cy: "209.83153",
   rx: "30.067492",
   ry: "26.438656",
   name: "bass"},
   {type: 'ellipse',
   fill: "#280b0b",
   id: "path5968",
   cx: "101.48077",
   cy: "251.30396",
   rx: "23.67383",
   ry: "20.217796",
   name: "kick drum"},
   {type: 'ellipse',
   fill: "#782121",
   id: "path6216",
   cx: "101.30798",
   cy: "171.81517",
   rx: "16.934565",
   ry: "16.761763",
   name: "snare drum"},
   {type: 'ellipse',
   fill: "#d4aa00",
   id: "path6680",
   cx: "160.92458",
   cy: "58.28447",
   rx: "21.945812",
   ry: "21.427408",
   name: "hi-hat"},
   {type: 'ellipse',
   fill: "#d4aa00",
   id: "path6806",
   cx: "35.470558",
   cy: "46.533951",
   rx: "20.909002",
   ry: "21.427408",
   name: "tambourine"},
   {type: 'ellipse',
   fill: "#008080",
   class: "featured",
   id: "path6964",
   cx: "100.44398",
   cy: "117.38264",
   rx: "29.89469",
   ry: "28.339474",
   name: "vocal"}
]

const satArray = [
   {type: 'rect',
      fill: '#ffe680', 
      id: "rect11394",
      width: "213.23727",
      height: "78.797562",
      x: "0.04621502",
      y: "123.2579",
      name: "reverb and delay"},
   {type: 'ellipse',
      fill: '#2b0000', 
      id: "path6692",
      cx: "104.24562",
      cy: "263.22726",
      rx: "24.365036",
      ry: "22.809822",
      name: "kick drum"},
   {type: 'ellipse',
      fill: '#ff6600', 
      id: "path10244",
      cx: "103.38161",
      cy: "135.52988",
      rx: "38.361973",
      ry: "12.787324",
      name: "handclaps"},
   {type: 'ellipse',
      fill: '#aa0000', 
      id: "path9902",
      cx: "103.20882",
      cy: "149.35095",
      rx: "22.291416",
      ry: "23.67383",
      name: "snare drum",
      transform: "matrix(0.88026008,0,0,0.80696023,11.83981,35.051533)"},
    {type: 'ellipse',
       class: 'featured',
       fill: '#800080', 
       id: "path10688",
       cx: "106.14644",
       cy: "84.62088",
       rx: "93.312904",
       ry: "34.733135",
       name: "high synth pad"},
    {type: 'ellipse',
       class: 'featured',
       fill: '#782121', 
       id: "path9776",
       cx: "102.8632",
       cy: "228.49411",
       rx: "44.41003",
       ry: "17.452969",
       name: "bass synth"},
    {type: 'ellipse',
       class: 'featured',
       fill: '#008080', 
       id: "path10486",
       cx: "102.8632",
       cy: "189.95934",
       rx: "80.352776",
       ry: "25.920252",
       name: "low keyboard"},
    {type: 'ellipse',
       class: 'featured',
       fill: '#00ffff', 
       id: "path10850",
       cx: "103.72722",
       cy: "97.510452",
       rx: "53.222916",
       ry: "34.387535",
       name: "synth lead"},
   {type: 'ellipse',
      fill: '#ff0000', 
      id: "path11200",
      cx: "17.671986",
      cy: "68.825371",
      rx: "20.044994",
      ry: "22.291416",
      name: "left backup vocal"},
   {type: 'ellipse',
      fill: '#ff0000', 
      id: "path11200-9",
      cx: "198.76814",
      cy: "70.380585",
      rx: "20.044994",
      ry: "23.67383",
      name: "right backup vocal"},
   {type: 'ellipse',
      fill: '#ffd42a', 
      id: "path10998",
      cx: "166.10864",
      cy: "49.125977",
      rx: "23.67383",
      ry: "24.019432",
      name: "cymbal"}
]

const spaceArray = [
   {type: 'rect', 
      fill: '#aa8800',            
      id: "rect1674",
      width: "102.6442",
      height: "45.27404",
      x: "51.541115",
      y: "170.25995",
      name: "snare effects"},
  {type: 'rect',
     class: 'featured',
     fill: '#c87137',            
     id: "rect1960",
     width: "199.41313",
     height: "64.627823",
     x: "7.6494889",
     y: "112.8898",
     name: "vocal effects"},
  {type: 'ellipse',
     class: 'featured',
     fill: '#008080',   
     id: "path1534",
     cx: "103.2088",
     cy: "123.43069",
     rx: "36.115551",
     ry: "35.078739",
     name: "vocal"},
   {type: 'rect',
      fill: '#ffe680',       
      id: "rect2376",
      width: "57.715759",
      height: "43.546021",
      x: "146.23643",
      y: "41.004299",
      name: "woodblock effects"},
   {type: 'ellipse',
      fill: '#2b0000',     
      id: "path63",
      cx: "104.07281",
      cy: "265.12808",
      rx: "22.118614",
      ry: "20.909002",
      name: "kick drum"},
   {type: 'ellipse',
      fill: '#501616',        
      id: "path848",
      cx: "103.38161",
      cy: "171.81516",
      rx: "20.7362",
      ry: "19.180986",
      name: "snare drum"},
   {type: 'ellipse',
      fill: '#800000',   
      id: "path970",
      cx: "103.38161",
      cy: "231.43173",
      rx: "14.169737",
      ry: "19.008184",
      name: "bass"},
   {type: 'ellipse',
      fill: '#008000',       
      id: "path1092",
      cx: "48.257885",
      cy: "203.95627",
      rx: "24.365036",
      ry: "23.328226",
      name: "left-panned guitar"},
   {type: 'ellipse',
      fill: '#008000',       
      id: "path1092-3",
      cx: "170.08305",
      cy: "188.05852",
      rx: "23.67383",
      ry: "22.464218",
      name: "right-panned guitar"},
   {type: 'ellipse',
      fill: '#d4aa00',         
      cx: "104.07281",
      cy: "39.621887",
      rx: "17.625771",
      ry: "24.537838",
      name: "cymbals"},
   {type: 'ellipse',
      fill: '#ffcc00',      
      cx: "174.7487",
      cy: "62.431709",
      rx: "9.8496952",
      ry: "10.3681",
      name: "woodblock"}
]

createShapes(fullMixArray);
createShapes(eqArray);
createShapes(compArray);
createShapes(satArray);
createShapes(spaceArray);

export const ALLSHAPES = allShapes;
