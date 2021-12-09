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
        audioNodes.forEach (function(node){
            if (that.dataset.playing === "false") {
                node.play();
                that.className = 'selected';
            } else {
                node.pause();
                that.className = 'not-selected';
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