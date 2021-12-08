import * as audio from './nodes_creator';
import { playButton } from './playbutton';
import { SoloToggle } from './solo_button';
import { sourceToggler } from './sourcetogglebutton';

export class IntroPage {
    constructor() {
        this.context = new AudioContext();
        this.nodeSet = audio.fullMix(this.context);

        const play = playButton(this.context, this.nodeSet);
        const soloUnused = new SoloToggle(this.nodeSet, this.nodeSet);
        const container = document.getElementById('page-contents');
        container.append(this.correctText());
        container.append(play);
        
        const that = this;
        this.addSources(that, container, soloUnused);
    }

    addSources(page, container, soloButton){
        page.nodeSet.forEach (function(node) {
            container.append(document.createElement('br'));
            container.append(sourceToggler(node, page.nodeSet, page.nodeSet, soloButton));
        })
    }


    correctText(){
        const explainer = document.createElement('p');
        return explainer;
    }

    closeContext(){
        this.context.close();
    }
}