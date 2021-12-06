// import _ from 'lodash';
import { _ } from 'core-js';
import * as imports from './imports.js';


document.addEventListener("DOMContentLoaded", (event) => {

    const rightFull = imports.createAudioNode('Full Track/Correct Compression', './audio/compression/Teacup_rightcompression_fulltrack.wav', false);
    const rightSolo = imports.createAudioNode('Solo Track/Correct Compression', './audio/compression/Teacup_rightcompression_solo.wav');
    const noFull = imports.createAudioNode('Full Track/No Compression', './audio/compression/Teacup_nocomp_fulltrack.wav');
    const noSolo = imports.createAudioNode('Solo Track/No Compression', './audio/compression/Teacup_nocomp_solo.wav');
    const overFull = imports.createAudioNode('Full Track/Over-Compression', './audio/compression/Teacup_overcompress_fulltrack.wav');
    const overSolo = imports.createAudioNode('Solo Track/Over-Compression', './audio/compression/Teacup_overcompress_solo.wav');
    const context = new AudioContext();
    const RFTrack = context.createMediaElementSource(rightFull);
    const RSTrack = context.createMediaElementSource(rightSolo); 
    const NFTrack = context.createMediaElementSource(noFull); 
    const NSTrack = context.createMediaElementSource(noSolo); 
    const OFTrack = context.createMediaElementSource(overFull); 
    const OSTrack = context.createMediaElementSource(overSolo); 
    const pageNodes = [rightFull, rightSolo, noFull, noSolo, overFull, overSolo];
    const pageTracks = [RFTrack, RSTrack, NFTrack, NSTrack, OFTrack, OSTrack];
    pageTracks.forEach (function(track) {track.connect(context.destination)});
    // debugger
    const playButton = imports.playButton(context, pageNodes);
    // debugger
    document.body.append(playButton);
    pageNodes.forEach (function(node) {
        document.body.append(document.createElement('br'));
        document.body.append(imports.sourceToggler(node, pageNodes));
    })
});