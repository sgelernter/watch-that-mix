import * as audio from './nodes_creator';
import { playButton } from './playbutton';
import { SoloToggle } from './solo_button';
import { sourceToggler } from './sourcetogglebutton';

export class EffectPage {
    constructor(pagename) {
        this.context = new AudioContext();
        this.gainNode = this.context.createGain();
        this.pagename = pagename;
        this.nodeSet = this.correctNodes();
        this.fullNodes = this.nodeSet[0];
        this.soloNodes = this.nodeSet[1];
        this.allNodes = this.nodeSet[2];

        const play = playButton(this.context, this.allNodes);
        const soloButton = new SoloToggle(this.fullNodes, this.soloNodes);
        const volume = this.createVolumeSlider();
        const container = document.getElementById('page-contents');
        container.append(this.title());
        container.append(this.correctText());
        container.append(play);
        container.append(soloButton);
        const that = this;

        volume.addEventListener ('input', function() {
            that.gainNode.value = this.value;
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
            case 'eq': explainer.innerHTML = `EQ (aka 'equalizing') is probably the tool that's easiest to get a handle on conceptually and one of the toughest to really get right in the mix.
                                            Equalizing just means the process of boosting or cutting parts of a sound's frequency spectrum, exactly the same as you might do for a full song when you adjust 
                                            the bass and treble on your car or home speakers. EQing in the context of a mix serves three main purposes: reducing unwanted noise, highlighting good noise, and 
                                            creating space for all the song's elements to be heard alongside each other. The first two goals are pretty self-explanatory, but the third is the one that takes
                                            a lot of practice--sounds that occupy similar parts of the frequency spectrum will 'mask' one another in the mix if you're not careful, exactly the same way a lot
                                            of voices in a room at a party might make it tough to discern what any one voice is saying. By strategically boosting and cutting different bits of each part of
                                            the arrangement, a mix engineer can make sure everything sounds right in and of itself and make sure nothing in the mix is obscuring other parts of the song we want to hear.
                                            Check out the effect different amounts of EQ shaping have on the guitars in this track (use the "S" solo button to go back and forth between hearing only the relevant elements and the full context!).`;
                                            break;
            case 'comp': explainer.innerHTML = `Where EQ tackles the frequency spectrum, compression is the go-to tool for producers to control the dynamics of a given 
                                            element (i.e. its varying volume over time). Sounds that shift a lot between being loud and soft an dip in and out of audibility, and we want to be able to 
                                            hear the right balance of everything at all points in the song. Compression is a tightrope though--too little will mean a sound feels 'unstable' and distracting,
                                            but too much can squeeze all the expression out of a performance. This is particularly important for vocals: singers often vary a lot in volume over the course of a performance,
                                            and the vocals are also what will carry most of the emotional impact for most songs, so it's important to compress juuuuuust enough to keep the volume steady without 
                                            losing the nuances of the singer's performance.`;
                                            break;
            case 'saturate': explainer.innerHTML = `Saturation and distortion started off as side-effects; just like with a visual art form, the medium of the recording affects the end result a ton! On a technical
                                                    level, saturation and distortion are both ways to increase the energy of a sound signal by introducing extra harmonics--which is a complicated way of saying it jams 
                                                    more and messier information into the same signal. Adding energy like this can make a sound stand out in a mix without having to increase the volume and possibly overpower
                                                    other elements, but it can also help to add character to any recordings that might feel a little too clean and pristine. Tape emulation, amplifier emulation, and other forms 
                                                    of overdriving a signal can be a huge help in a mix by adding a dash of analog "glue" to a digital recording like this one.`;
                                            break;
            case 'spatial': explainer.innerHTML = `'Spatial effects' is a catch-all term for a lot of types of processing, but the two most common are reverb and delay. Delay is just an echo--the original signal 
                                                    is offset by a certain amount and fed back into the main mix, creating the a sense of sound reflecting off real-world surfaces. Reverb does the same thing with 
                                                    hundreds or thousands of discrete delays, which can create a much more complex and specific sense of space (kind of like the difference between a regular echo and the particular
                                                    character of your voice when you're singing in the shower). There's tons of creative uses for these types of effects, but most often they're being used for one of a couple
                                                    purposes, namely grouping different sounds with the same effect to make them sound like they're happening in the same simulated space or adding effects to a sound to make it 
                                                    seem larger or farther away. A little reverb or creative delay can be a huge help to the vibe of a track, but too much will wash out both the sound the effect is being used
                                                    on and the rest of the song as well.`;
                                            break;
        }
        return explainer;
    }

    title(){
        const titleText = document.createElement('h2');
        switch (this.pagename) {
            case 'eq': 
                titleText.innerHTML = 'EQ - Everything In Its Place';
                break;
            case 'comp': 
                titleText.innerHTML = 'Compression - Reign It In';
                break;
            case 'saturate': 
                titleText.innerHTML = 'Saturation & Distortion - Analog Attitude';
                break;
            case 'spatial': 
                titleText.innerHTML = 'Spatial Effects - In Space, No One Can Hear Your Terrible Mix';
                break;
        }
        return titleText;
    }

    // This is the start of one of the functionalities I didn't end up with time to implement--a volume control slider for each sound in the page (not deleted because 
    // some of its code is currently tied into the process of creating an effects page):
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


