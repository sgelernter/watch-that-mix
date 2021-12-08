import * as audio from './nodes_creator';
import { playButton } from './playbutton';
import { SoloToggle } from './solo_button';
import { sourceToggler } from './sourcetogglebutton';

export class EffectPage {
    constructor(pagename) {
        // document.open();
        this.context = new AudioContext();
        this.gainNode = this.context.createGain();
        this.pagename = pagename;
        this.nodeSet = this.correctNodes();
        // debugger
        this.fullNodes = this.nodeSet[0];
        this.soloNodes = this.nodeSet[1];
        this.allNodes = this.nodeSet[2];

        const play = playButton(this.context, this.allNodes);
        const soloButton = new SoloToggle(this.fullNodes, this.soloNodes);
        const volume = this.createVolumeSlider();
        const pageText = document.createElement('p');
        pageText.innerText = this.correctText();
        const container = document.getElementById('page-contents');
        container.append(pageText);
        container.append(play);
        container.append(soloButton);
        // container.append(volume);
        const that = this;

        volume.addEventListener ('input', function() {
            // debugger
            that.gainNode.value = this.value;
            console.log(this.value);
        });

        this.fullNodes.forEach (function(node) {
            container.append(document.createElement('br'));
            container.append(sourceToggler(node, that.fullNodes, that.soloNodes, soloButton));
        })
    }

    correctNodes(){
        switch (this.pagename) {
            case 'eq': return audio.eq(this.context, this.gainNode);
            case 'comp': return audio.comp(this.context, this.gainNode);                   
            case 'saturate': return audio.saturate(this.context, this.gainNode);                   
            case 'spatial': return audio.spatial(this.context, this.gainNode);                   
        }
    }

    correctText(){
        const explainer = document.createElement('p');
        switch (this.pagename) {
            case 'eq': explainer.innerHTML = 'A short paragraph with an explanation of the effect goes here once I write it and figure out the most efficient way to populate it to the page.';
        }
        return explainer;
    }

    createVolumeSlider(){
        const volControl = document.createElement('input');
        volControl.type = 'range';
        volControl.id = 'vol';
        volControl.min = 0;
        volControl.max = 2;
        volControl.value = 1;
        volControl.step = .01;
        return volControl;
    }

    closeContext(){
        this.context.close();
    }
}


