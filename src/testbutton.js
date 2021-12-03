
export const createButtons = function(){

    const playButton = document.createElement('button');
    playButton.innerText = 'play/pause';
    playButton.setAttribute('data-playing', false);
    playButton.setAttribute('role', 'switch');

    const bOk = document.createElement('audio');
    bOk.src = '../audio/B_Ok_master_final_44.1khz.wav';
    bOk.setAttribute('loop', true);
    
    const bOkRaw = document.createElement('audio');
    bOkRaw.src = '../audio/B_Ok_rawtracks.wav';
    bOkRaw.setAttribute('loop', true);
    bOkRaw.setAttribute('muted', true);

    const audioCtx = new AudioContext();
    const track = audioCtx.createMediaElementSource(bOk);
    const rawTrack = audioCtx.createMediaElementSource(bOkRaw);
    track.connect(audioCtx.destination);
    rawTrack.connect(audioCtx.destination);

    playButton.addEventListener("click", function() {
        if (audioCtx.state === "suspended"){ audioCtx.resume()};

        if (this.dataset.playing === "false" ) {
            bOk.play();
            bOkRaw.play();
            this.dataset.playing = "true";
        } else {
            bOk.pause();
            bOkRaw.pause();
            this.dataset.playing = "false";
        }
        }, false);

    const rawLabel = document.getElementById('raw');
    const mixedLabel = document.getElementById('mixed');
    rawLabel.className = 'invisible';
    
    const swapperButton = document.createElement('button');
    swapperButton.innerText = 'mixed/raw';
    swapperButton.setAttribute('data-playing', false);
    swapperButton.setAttribute('role', 'switch');
    
    swapperButton.addEventListener("click", function() {
        if (bOk.muted === true) {
            bOk.muted = false;
            bOkRaw.muted = true;
            mixedLabel.className = 'visible';
            rawLabel.className = 'invisible';
        } else {
            bOk.muted = true;
            bOkRaw.muted = false;
            mixedLabel.className = 'invisible';
            rawLabel.className = 'visible';
        }
    });

    document.body.append(playButton);
    document.body.append(document.createElement('br'));
    document.body.append(document.createElement('br'));
    document.body.append(swapperButton);
}

