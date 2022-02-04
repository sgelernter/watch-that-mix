import { takeRightWhile } from 'lodash';
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
        const title = document.createElement('h1');
        // const playBox = document.getElementById('play-solo');
        // const togglerBox = document.getElementById('togglers');
        title.innerHTML = "Watch That Mix!";
        container.append(title);
        container.append(this.correctText());
        // container.append(playBox);
        // container.append(togglerBox);
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
        explainer.innerHTML = `On a broad scale, the process of mixing just means taking the raw recorded tracks of each element in a song's arrangement and blending them together in such a way that they 'feel' right (quotes there mostly because music production is as 
        subjective as anything else creative, and ultimately the only correct mix decision is one that sounds good to the producer!). On the following pages, we'll go into a few of the tools a mix engineer 
        might use to get everything sitting right before sending a track off to mastering (which is an entirely different JS demo). Each page comes with a demo clip
        that can be played and paused, along with a few before/after options for you to get an idea of what these tools actually sound like. The diagrams on the left are 
        interactive representations of the mixes you'll be listening to, with each shape standing in for a different part of the arrangement. The y-axis represents frequency,
        the x-axis represents panning in the stereo field, and depth represents elements that feel closer or farther from the listener. The colors don't mean anything, but they are fun. Mouse
        over a shape to see what sound it corresponds to!`;
        return explainer;
    }

    closeContext(){
        this.context.close();
    }
}