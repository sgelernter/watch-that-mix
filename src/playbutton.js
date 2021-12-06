export const playButton = function(audioContext, audioNodes){
    const button = document.createElement('button');
    button.innerText = 'Play/Pause Track';
    button.setAttribute('data-playing', false);
    
    
    button.addEventListener("click", function(){
        event.preventDefault();
        if (audioContext.state === "suspended") {audioContext.resume()};
        const that = this;
        // debugger
        audioNodes.forEach (function(node){
            if (that.dataset.playing === "false") {
                // debugger
                node.play();
                // that.dataset.playing = "true";
            } else {
                // debugger
                node.pause();
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