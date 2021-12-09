import { createAudioNode } from "./audio_node_setup";

const eq = function(context) {
    const rightFull = createAudioNode('Good EQ', './src/audio/EQ/Hanging_Around_fulltrack_finalGTReq.wav', false); 
    const rightSolo = createAudioNode('Good Solo', './src/audio/EQ/Hanging_Around_solo_finalGTReq.wav')
    const noFull = createAudioNode('No EQ', './src/audio/EQ/Hanging_Around_fulltrack_noGTReq.wav')
    const noSolo = createAudioNode('No Solo', './src/audio/EQ/Hanging_Around_solo_noGTReq.wav')
    const overFull = createAudioNode('Too Much EQ', './src/audio/EQ/Hanging_Around_fulltrack_badGTReq.wav')
    const overSolo = createAudioNode('Too Much Solo', './src/audio/EQ/Hanging_Around_solo_badGTReq.wav')
    const fullNodes = [rightFull, noFull, overFull];
    const soloNodes = [rightSolo, noSolo, overSolo];
    const allNodes = fullNodes.concat(soloNodes);
    allNodes.forEach (function(node) {
        context.createMediaElementSource(node).connect(context.destination);
    });
    return [fullNodes, soloNodes, allNodes];
}


const comp = function(context) {
    const rightFull = createAudioNode('Good Compression', './src/audio/compression/Teacup_rightcompression_fulltrack.wav', false); 
    const rightSolo = createAudioNode('Good Solo', './src/audio/compression/Teacup_rightcompression_solo.wav')
    const noFull = createAudioNode('No Compression', './src/audio/compression/Teacup_nocomp_fulltrack.wav')
    const noSolo = createAudioNode('No Solo', './src/audio/compression/Teacup_nocomp_solo.wav')
    const overFull = createAudioNode('Too Much Compression', './src/audio/compression/Teacup_overcompress_fulltrack.wav')
    const overSolo = createAudioNode('Too Much Solo', './src/audio/compression/Teacup_overcompress_solo.wav')
    const fullNodes = [rightFull, noFull, overFull];
    const soloNodes = [rightSolo, noSolo, overSolo];
    const allNodes = fullNodes.concat(soloNodes);
    allNodes.forEach (function(node) {
        context.createMediaElementSource(node).connect(context.destination);
    });
    return [fullNodes, soloNodes, allNodes];
}

const saturate = function(context) {
    const rightFull = createAudioNode('Good Saturation', './src/audio/saturation_and_distortion/EnyaIV_goodSaturation_fulltrack.wav', false); 
    const rightSolo = createAudioNode('Good Solo', './src/audio/saturation_and_distortion/EnyaIV_goodSaturation_solo.wav')
    const noFull = createAudioNode('No Saturation', './src/audio/saturation_and_distortion/EnyaIV_noSaturation_fulltrack.wav')
    const noSolo = createAudioNode('No Solo', './src/audio/saturation_and_distortion/EnyaIV_noSaturation_solo.wav')
    const overFull = createAudioNode('Too Much Saturation', './src/audio/saturation_and_distortion/EnyaIV_OVERSaturation_fulltrack.wav')
    const overSolo = createAudioNode('Too Much Solo', './src/audio/saturation_and_distortion/EnyaIV_OVERSaturation_solo.wav')
    const fullNodes = [rightFull, noFull, overFull];
    const soloNodes = [rightSolo, noSolo, overSolo];
    const allNodes = fullNodes.concat(soloNodes);
    allNodes.forEach (function(node) {
        context.createMediaElementSource(node).connect(context.destination);
    });
    return [fullNodes, soloNodes, allNodes];
}

const spatial = function(context) {
    const rightFull = createAudioNode('Good Spatial FX', './src/audio/spatial_effects/Sweatshirt_goodspatialFX_fulltrack.wav', false); 
    const rightSolo = createAudioNode('Good Solo', './src/audio/spatial_effects/Sweatshirt_goodspatialFX_solo.wav')
    const noFull = createAudioNode('No FX', './src/audio/spatial_effects/Sweatshirt_NOspatialFX_fulltrack.wav')
    const noSolo = createAudioNode('No Solo', './src/audio/spatial_effects/Sweatshirt_NOspatialFX_solo.wav')
    const overFull = createAudioNode('Too Much Space', './src/audio/spatial_effects/Sweatshirt_XTspatialFX_fulltrack.wav')
    const overSolo = createAudioNode('Too Much Solo', './src/audio/spatial_effects/Sweatshirt_XTspatialFX_solo.wav')
    const fullNodes = [rightFull, noFull, overFull];
    const soloNodes = [rightSolo, noSolo, overSolo];
    const allNodes = fullNodes.concat(soloNodes);
    allNodes.forEach (function(node) {
        context.createMediaElementSource(node).connect(context.destination);
    });
    return [fullNodes, soloNodes, allNodes];
}

const fullMix = function(context) {
    const fullMix = createAudioNode('Full Mix', './src/audio/full_mix/B_Ok_master_final_44.1khz.wav', false); 
    const rawTracks = createAudioNode('Raw Tracks', './src/audio/full_mix/B_Ok_rawtracks.wav');
    context.createMediaElementSource(fullMix).connect(context.destination);
    context.createMediaElementSource(rawTracks).connect(context.destination);
    return [fullMix, rawTracks];
}


export { eq, comp, saturate, spatial, fullMix }