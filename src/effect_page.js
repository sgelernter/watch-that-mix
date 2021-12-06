import * as audio from './nodes_creator';
import { playButton } from './playbutton';
import { SoloToggle } from './solo_button';
import { sourceToggler } from './sourcetogglebutton';

export class EffectPage {
    constructor(pagename) {
        // document.open();
        this.context = new AudioContext();
        this.pagename = pagename;
        this.nodeSet = this.correctNodes();
        // debugger
        this.fullNodes = this.nodeSet[0];
        this.soloNodes = this.nodeSet[1];
        this.allNodes = this.nodeSet[2];
        // debugger
        const play = playButton(this.context, this.allNodes);
        const soloButton = new SoloToggle(this.fullNodes, this.soloNodes);
        const container = document.getElementById('page-contents');
        container.append(play);
        container.append(soloButton);
        const that = this;

        this.fullNodes.forEach (function(node) {

            container.append(document.createElement('br'));
            container.append(sourceToggler(node, that.fullNodes, that.soloNodes, soloButton));
        })
    }

    correctNodes(){
        switch (this.pagename) {
            case 'eq': return audio.eq(this.context);
            case 'comp': return audio.comp(this.context);
        }
    }

    closeContext(){
        this.context.close();
        // return new AudioContext();
        // debugger
    }
}


