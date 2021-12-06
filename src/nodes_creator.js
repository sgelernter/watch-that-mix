import { createAudioNode } from "./audio_node_setup";

const eq = function(context) {
    const rightFull = createAudioNode('Good EQ', './audio/EQ/Hanging_Around_fulltrack_finalGTReq.wav', false); 
    const rightSolo = createAudioNode('Good Solo', './audio/EQ/Hanging_Around_solo_finalGTReq.wav')
    const noFull = createAudioNode('No EQ', './audio/EQ/Hanging_Around_fulltrack_noGTReq.wav')
    const noSolo = createAudioNode('No Solo', './audio/EQ/Hanging_Around_solo_noGTReq.wav')
    const overFull = createAudioNode('Too Much EQ', './audio/EQ/Hanging_Around_fulltrack_badGTReq.wav')
    const overSolo = createAudioNode('Too Much Solo', './audio/EQ/Hanging_Around_solo_badGTReq.wav')
    const fullNodes = [rightFull, noFull, overFull];
    const soloNodes = [rightSolo, noSolo, overSolo];
    const allNodes = fullNodes.concat(soloNodes);
    allNodes.forEach (function(node) {
        (context.createMediaElementSource(node)).connect(context.destination);
    });
    return [fullNodes, soloNodes, allNodes];
}


const comp = function(context) {
    const rightFull = createAudioNode('Good Compression', './audio/compression/Teacup_rightcompression_fulltrack.wav', false); 
    const rightSolo = createAudioNode('Good Solo', './audio/compression/Teacup_rightcompression_solo.wav')
    const noFull = createAudioNode('No Compression', './audio/compression/Teacup_nocomp_fulltrack.wav')
    const noSolo = createAudioNode('No Solo', './audio/compression/Teacup_nocomp_solo.wav')
    const overFull = createAudioNode('Too Much Compression', './audio/compression/Teacup_overcompress_fulltrack.wav')
    const overSolo = createAudioNode('Too Much Solo', './audio/compression/Teacup_overcompress_solo.wav')
    const fullNodes = [rightFull, noFull, overFull];
    const soloNodes = [rightSolo, noSolo, overSolo];
    const allNodes = fullNodes.concat(soloNodes);
    allNodes.forEach (function(node) {
        (context.createMediaElementSource(node)).connect(context.destination);
    });
    return [fullNodes, soloNodes, allNodes];
}
// './audio/compression/Teacup_rightcompression_fulltrack.wav',
// './audio/compression/Teacup_nocomp_fulltrack.wav',
// './audio/compression/Teacup_overcompress_fulltrack.wav',
// './audio/compression/Teacup_nocomp_solo.wav',
// './audio/compression/Teacup_rightcompression_solo.wav',
// './audio/compression/Teacup_overcompress_solo.wav'

export { eq, comp }