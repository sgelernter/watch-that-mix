<img src="./watchthatmix.png" alt="Watch that mix! logo" width="200"/>

# Watch that mix!
[Watch that mix! - Live site](https://sgelernter.github.io/watch-that-mix/)

### Table of Contents
- [Description](#description)
- [Technologies](#technologies)
- [Features and Functionality](#features-and-functionality)
- [Site Wireframes](#site-wireframes)
- [Code Highlights](#code-highlights)

## Description
Pretty much everyone enjoys music, but most people know little if anything about how music is produced. 
The functions of microphones, instruments, and performers are all pretty self-explanatory, but even many 
music enthusiasts wouldn't be able to tell you what a compressor does or the difference between a reverb 
and a delay in the context of music production. The goal of this project is to teach anyone interested in 
the process of how music gets made about some of the tools producers use when turning raw recorded performance 
into a finished, radio-ready track. 

![basic effect page](./readme_images/basic_page.JPG)

By providing an engaging, responsive interface to experiment with effects of various types of processing 
in-context and in real time, "Watch that mix!" allows users to develop some hands-on knowledge of the 
music-making process that will hopefully enhance their understanding and appreciation for all the work that 
goes into making their favorite songs sound the way they sound, both from a technical and from an artistic standpoint. 

![effect page-soloed track](./readme_images/solo_page.JPG)

## Technologies

This project is implemented using:

- The [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) to load and control audio elements and playback
- [Webpack](https://webpack.js.org/) to bundle JS code
- [Babel](https://babeljs.io/) to transpile JS code
- [npm](https://www.npmjs.com/) to manage dependencies
- [D3](https://d3js.org/) API to enable dynamic mix visualizations
- [Inkscape](https://inkscape.org/) to generate SVG shapes 

## Features and Functionality

In "Watch That Mix!", users are able to:

- Play and pause audio clips that will loop until stopped
- Change qualities of the sound they're listening to in real time
- A/B the difference between a set of raw tracks and a fully-mixed arrangement
- Hear the effects a variety of types of processing have on elements of a song, both isolated and in-context
- Navigate between sections of the interactive experience without having to reload their browser

In addition, this project includes:

- This highly-informational README document
- Dynamically-animated transitions between display states (e.g. slide changes, mix element highlighting)
- Intuitive visualizations to help focus the user's attention for a more engaging experience
- A sense of accomplishment on behalf of its author

## Site Wireframes

###             Initial Landing Page:

![initial landing page](./readme_images/landing_page.png)

- Landing page will give some background on what the user will encounter within the project and will have a button to move to the first slide

###             Introduction Page:

![introduction page](./readme_images/the_mix.png)

- The opening page will introduce the concept of a "mix" and the mix visualization format
- Will include the first two demos, which between them will show the effects of panning, volume, and full individual processing across all tracks
- Sections will "enter" the page via animation as indicated by the numbered ovals
- General nav at the bottom of the page will allow user to jump between sections

###             Processor demos:

![individual processor demo](./readme_images/-processor-page-.png)

- Slides for each processor type will include a visualization highlighting the element being used for this processor demo
- Users can play/pause looped audio, toggling what they hear between a single track or the full song and between different levels of processing for that track
- Processors are planned to include: EQ, compression, saturation/distortion, modulation, pitch shift, and spatial effects (reverb or delay) 


## Code Highlights

The idea of generating all of the shapes required to make interactive mix charts seemed daunting until I found a program (Inkscape) that allows for creation of shapes in a GUI and export a set of HTML objects. That still left the task of creating and formatting dozens of individual shapes of different types within my project. This was the method I wrote to solve that problem, which takes in a POJO with data for a group of unknown types of objects and returns a usable array filled with java-ready SVG shapes:
```javascript

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

```

In order to create the illusion of live-swapping different processing states on a single sound, each effect page actually draws from a set of audio nodes running concurrently. To make the solo buttons work they had to 1) see all the avalable nodes, 2) query for the currently-playing node, 3) swap what's currently-playing the correct corresponding full track/solo sound, and 4) handle the animation triggers for the charts:

```javascript

export class SoloToggle {
    constructor(fullNodes, soloNodes){

        this.fullNodes = fullNodes;
        this.soloNodes = soloNodes;
        this.button = document.createElement('button');
        this.button.innerText = 'S';
        this.button.id = 'solo-button';
        this.button.className = 'not-soloed';

        const that = this;

        this.button.addEventListener("click", function(){

            let solo = that.getCurrentNode(soloNodes);
            let full = that.getCurrentNode(fullNodes);
            if (solo) {
                const soloIdx = soloNodes.indexOf(solo);
                solo.muted = true;
                that.fullNodes[soloIdx].muted = false;
                that.button.className = 'not-soloed';
                d3.selectAll('.shape-dimmed')
                    .attr('class', 'shape');
                d3.selectAll('.shape-featured-highlighted')
                    .attr('class', 'shape-featured');
            } else {
                const fullIdx = fullNodes.indexOf(full);
                full.muted = true;
                that.soloNodes[fullIdx].muted = false;
                that.button.className = 'soloed';
                d3.selectAll('.shape')
                    .attr('class', 'shape-dimmed');
                d3.selectAll('.shape-featured')
                    .attr('class', 'shape-featured-highlighted');
            }
        })
        return this.button;
    }

    getCurrentNode(nodesArr) {
        let currentNode;
        nodesArr.forEach (function(node) {
            if (node.muted === false) {
                currentNode = node;
            }
            })
            return currentNode;
        }
    
}

```
Updating the DOM to contain the correct text, buttons, and set of active chart elements was one of the trickier tasks in this thing. Most of that work is handled within this one function that wipes the previous content, reveals the appropriate chart, then finally returns newly-created page content (re-making the page elements prevents the audio nodes from one page from playing accidentally while interacting with a different page and resets the sound clips to the beginning on setup):

```javascript

    const setCurrentPage = function(){
        const prevPage = document.getElementById('page-contents');
        const prevContents = Array.from(prevPage.children);
        prevContents.forEach (function(el) {prevPage.removeChild(el)});
        updateButtons();
        if (i === 0) {
            revealChart('fullmix', chartContainer);
            return new IntroPage();
        } else {
            revealChart(pageList[i], chartContainer);
            return new EffectPage(pageList[i]);
        }
    }

```

<!-- 
## Implementation Timeline

#### Friday
 
 - ~~Set up project structure/skeleton with webpack; test that it's working~~
 - ~~Begin familiarization with the Web Audio API~~
 - ~~Get a prototype button running that can play/pause audio~~
 - ~~Get prototype button to loop audio~~
 - ~~Get protoype button to live-swap audio from two sources~~

#### Saturday/Sunday
 
 - ~~Assemble necessary audio resources. These will be approximately 15-second clips, comprising 4 intro slide clips and 6 clips for each processor slide for an estimated 34-40 clips depending on processor categorization. These will need to be pulled from old pro tools sessions, and for variety some will need to be cleared for use with the artists.~~ 
 - ~~Implement player/toggle buttons functionality~~

#### Monday

 - ~~Begin familiarization with D3 API, determine steps needed to create and animate mix visualization displays~~
 - ~~Set up nav bar/"next" buttons w/ page change functionality~~
 - ~~Begin CSS styling for site~~

#### Tuesday

 - ~~Write in-page copy~~
 - ~~Create mix visualizers, add them to slides~~
 - ~~Generate mix charts~~
 - ~~Use D3 to add dynamic behavior to visualizers~~
 - ~~(Change source toggle buttons to radio elements?)~~
 - ~~Determine which bonus features are doable within remaining time, if any~~
 

#### Wednesday

 - ~~Complete CSS styling for site~~
 - ~~Have text and buttons displayed and arranged correctly~~
 - ~~Misc. bug fixes/flair additions (animations, scroll/mouse interactions, etc.)~~
 - Third-party review/testing (i.e. get a friend to try it out and offer feedback)
 - Add any feasible bonus features

#### Thursday

 - ~~Spellcheck~~
 - ~~Update documentation~~

## Bonus Features

 - Less-essential processors (pitch shift), additional processing options within individual processors (different types of modulation, saturating groups of tracks)
 - Advanced processing types (pitch correction, sample triggers, *parallel compression*)
 - __SUPER DUPER BONUS:__ bonus page with interactive mixer, including faders for individual song elements that control track volume and panning  -->