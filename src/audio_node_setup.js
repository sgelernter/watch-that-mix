export const createAudioNode = function(title, source, muted = true){
    const el = new Audio(source);
    el.setAttribute('title', title);
    el.setAttribute('loop', true);
    el.setAttribute('paused', true);
    muted ? el.muted = true : el.muted = false;
    
    return el;
}