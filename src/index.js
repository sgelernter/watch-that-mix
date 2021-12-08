// import _ from 'lodash';
import { _ } from 'core-js';
import { EffectPage } from './effect_page.js';
import * as imports from './imports.js';


document.addEventListener("DOMContentLoaded", (event) => {
    // let audioContext = new AudioContext();
    const pageList = ['eq', 'comp', 'saturate', 'spatial'];
    let i = 0;
    const setCurrentPage = function(){
        const prevPage = document.getElementById('page-contents');
        const prevContents = Array.from(prevPage.children);
        prevContents.forEach (function(el) {prevPage.removeChild(el)});
        return new EffectPage(pageList[i]);
    }
    let currentPage = setCurrentPage();
    // debugger
    const nextButton = document.getElementById('next');
    nextButton.addEventListener("click", function(){
        // debugger
        i++;
        currentPage.closeContext();
        currentPage = setCurrentPage();
    })
    const prevButton = document.getElementById('previous');
    prevButton.addEventListener("click", function(){
        // debugger
        console.log('where is the debugger');
        i--;
        currentPage.closeContext();
        currentPage = setCurrentPage();
    })

    const nav = document.getElementById('nav');
    nav.addEventListener("click", function(e){
        i = pageList.indexOf(e.target.id);
        currentPage.closeContext();
        currentPage = setCurrentPage();
    })

    const chartContainer = document.getElementById('chart-container');
    const shapes = imports.graph();
    shapes.forEach ((shape) => {
        chartContainer.append(shape);
        shape.setAttribute('class', 'shape');
    });
    
    const update = function(){
        d3.selectAll('.shape')
            .transition()
            .duration(2000)
            .style('opacity', '100%');
    }
    update();
    
});


// const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
// circle.setAttribute('cx', '50%');
// circle.setAttribute('cy', '50%');
// circle.setAttribute('r', '50');
// circle.setAttribute('fill', 'blue');
// circle.setAttribute('id', 'dynamic-circle');
// chartContainer.append(circle);
// let currentPage = new EffectPage(audioContext, 'comp');
// let newPage = new EffectPage(audioContext, 'eq');



// createButtons();

// const rightFull = imports.createAudioNode('Correct Compression', './audio/compression/Teacup_rightcompression_fulltrack.wav', false);
// const rightSolo = imports.createAudioNode('Solo Track/Correct Compression', './audio/compression/Teacup_rightcompression_solo.wav');
// const noFull = imports.createAudioNode('No Compression', './audio/compression/Teacup_nocomp_fulltrack.wav');
// const noSolo = imports.createAudioNode('Solo Track/No Compression', './audio/compression/Teacup_nocomp_solo.wav');
// const overFull = imports.createAudioNode('Over-Compression', './audio/compression/Teacup_overcompress_fulltrack.wav');
// const overSolo = imports.createAudioNode('Solo Track/Over-Compression', './audio/compression/Teacup_overcompress_solo.wav');
// const context = new AudioContext();
// const RFTrack = context.createMediaElementSource(rightFull);
// const RSTrack = context.createMediaElementSource(rightSolo); 
// const NFTrack = context.createMediaElementSource(noFull); 
// const NSTrack = context.createMediaElementSource(noSolo); 
// const OFTrack = context.createMediaElementSource(overFull); 
// const OSTrack = context.createMediaElementSource(overSolo); 
// const fullNodes = [rightFull, noFull, overFull];
// const soloNodes = [rightSolo, noSolo, overSolo];
// const pageNodes = fullNodes.concat(soloNodes);
// const pageTracks = [RFTrack, RSTrack, NFTrack, NSTrack, OFTrack, OSTrack];
// pageTracks.forEach (function(track) {track.connect(context.destination)});
// // debugger
// const playButton = imports.playButton(context, pageNodes);
// const soloButton = new imports.SoloToggle(fullNodes, soloNodes);
// // debugger
// document.body.append(playButton);
// document.body.append(soloButton);

// fullNodes.forEach (function(node) {
//     document.body.append(document.createElement('br'));
//     document.body.append(imports.sourceToggler(node, fullNodes, soloNodes, soloButton));
// })