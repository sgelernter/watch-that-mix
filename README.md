## About

Pretty much everyone enjoys music, but most people know little if anything about how music is produced. 
The functions of microphones, instruments, and performers are all pretty self-explanatory, but even many 
music enthusiasts wouldn't be able to tell you what a compressor does or the difference between a reverb 
and a delay in the context of music production. The goal of this project is to teach anyone interested in 
the process of how music gets made about some of the tools producers use when turning raw recorded performance 
into a finished, radio-ready track. 

![basic effect page](./readme_images/basic_page.JPG)

By providing an engaging, responsive interface to experiment with effects of various types of processing 
in-context and in real time, [this project](https://sgelernter.github.io/watch-that-mix/) will allow users to develop some hands-on knowledge of the 
music-making process that will hopefully enhance their understanding and appreciation for all the work that 
goes into making their favorite songs sound the way they sound from both a technical and artistic standpoint. 

![effect page-soloed track](./readme_images/solo_page.JPG)


## Functionality & MVPs

In "Watch That Mix!", users will be able to:

- Play and pause audio clips that will loop until stopped
- Change qualities of the sound they're listening to in real time
- A/B the difference between a set of raw tracks and a fully-mixed arrangement
- Hear the effects a variety of types of processing have on elements of a song, both isolated and in-context
- Navigate between sections of the interactive experience without having to reload their browser

In addition, this project will include:

- This highly-informational README document
- Dynamically-animated transitions between display states (e.g. slide changes, mix element highlighting)
- Intuitive visualizations to help focus the user's attention for a more engaging experience
- A major sense of accomplishment on behalf of its author if/when he manages to get all of the above done

## Wireframes

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

## Technologies, Libraries, & APIs

This project will be implemented using:

- The Web Audio API to load and control audio elements and playback
- Webpack to bundle JS code
- Babel to transpile JS code
- npm to manage dependencies
- [D3](https://d3js.org/) API to enable dynamic mix visualizations
- Inkscape to generate SVG shapes 

## Code Highlights

The idea of generating all of the shapes required to make interactive mix charts seemed daunting until I found a program ([Inkscape](https://inkscape.org/)) that allows for creation of shapes in a GUI and export a set of HTML objects. That still left the task of creating and formatting dozens of individual shapes of different types within my project. This was the method I wrote to solve that problem, which takes in a POJO with data for a group of unknown types of objects and returns a usable array filled with java-ready SVG shapes:
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
 - Set up nav bar/~~"next" buttons w/ page change functionality~~
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

 - Spellcheck
 - Update documentation

## Bonus Features

 - Less-essential processors (pitch shift), additional processing options within individual processors (different types of modulation, saturating groups of tracks)
 - Advanced processing types (pitch correction, sample triggers, *parallel compression*)
 - __SUPER DUPER BONUS:__ bonus page with interactive mixer, including faders for individual song elements that control track volume and panning 