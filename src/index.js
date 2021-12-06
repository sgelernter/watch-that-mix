// import _ from 'lodash';
import { _ } from 'core-js';
import * as imports from './imports.js';
// import {createButtons} from './testbutton.js';


document.addEventListener("DOMContentLoaded", (event) => {

    // createButtons();

    const rightFull = imports.createAudioNode('Correct Compression', './audio/compression/Teacup_rightcompression_fulltrack.wav', false);
    const rightSolo = imports.createAudioNode('Solo Track/Correct Compression', './audio/compression/Teacup_rightcompression_solo.wav');
    const noFull = imports.createAudioNode('No Compression', './audio/compression/Teacup_nocomp_fulltrack.wav');
    const noSolo = imports.createAudioNode('Solo Track/No Compression', './audio/compression/Teacup_nocomp_solo.wav');
    const overFull = imports.createAudioNode('Over-Compression', './audio/compression/Teacup_overcompress_fulltrack.wav');
    const overSolo = imports.createAudioNode('Solo Track/Over-Compression', './audio/compression/Teacup_overcompress_solo.wav');
    const context = new AudioContext();
    const RFTrack = context.createMediaElementSource(rightFull);
    const RSTrack = context.createMediaElementSource(rightSolo); 
    const NFTrack = context.createMediaElementSource(noFull); 
    const NSTrack = context.createMediaElementSource(noSolo); 
    const OFTrack = context.createMediaElementSource(overFull); 
    const OSTrack = context.createMediaElementSource(overSolo); 
    const fullNodes = [rightFull, noFull, overFull];
    const soloNodes = [rightSolo, noSolo, overSolo];
    const pageNodes = fullNodes.concat(soloNodes);
    const pageTracks = [RFTrack, RSTrack, NFTrack, NSTrack, OFTrack, OSTrack];
    pageTracks.forEach (function(track) {track.connect(context.destination)});
    // debugger
    const playButton = imports.playButton(context, pageNodes);
    const soloButton = new imports.SoloToggle(fullNodes, soloNodes);
    // debugger
    document.body.append(playButton);
    document.body.append(soloButton);

    fullNodes.forEach (function(node) {
        document.body.append(document.createElement('br'));
        document.body.append(imports.sourceToggler(node, fullNodes, soloNodes, soloButton));
    })
});