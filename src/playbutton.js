export const playButton = function(audioContext, audioNodes){
    const button = document.createElement('button');
    button.innerText = 'Play/Pause Track';
    button.id = 'play';
    button.className = 'not-selected';
    button.setAttribute('data-playing', false);
    
    
    button.addEventListener("click", function(e){
        e.preventDefault();
        if (audioContext.state === "suspended") {audioContext.resume()};
        const that = this;
        // debugger
        audioNodes.forEach (function(node){
            if (that.dataset.playing === "false") {
                // debugger
                node.play();
                that.className = 'selected';
                // that.dataset.playing = "true";
            } else {
                // debugger
                node.pause();
                that.className = 'not-selected';
                // that.dataset.playing = "false";
            }
        });
        if (this.dataset.playing === "false") {
            this.dataset.playing = "true";
        } else{
            this.dataset.playing = "false";
        }
    });
    return button;
}