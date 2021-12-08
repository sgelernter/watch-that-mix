// import _ from 'lodash';
import { _ } from 'core-js';
import { IntroPage } from './intro_page.js';
import { EffectPage } from './effect_page.js';
import * as imports from './imports.js';
import './reset.css';


document.addEventListener("DOMContentLoaded", (event) => {
    // let audioContext = new AudioContext();
    const pageList = ['fullmix', 'eq', 'comp', 'saturate', 'spatial'];
    let i = 0;
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('previous');
    const updateButtons = function(){
        switch (i) {
            case 0: 
                // debugger
                prevButton.className = 'invisible';
                nextButton.className = 'visible';
                break;
            case (pageList.length - 1):
                nextButton.className = 'invisible';
                prevButton.className = 'visible';
                break;
            default:
                // debugger
                nextButton.className = 'visible';
                prevButton.className = 'visible';
        }
    }
    
    const setCurrentPage = function(){
        const prevPage = document.getElementById('page-contents');
        const prevContents = Array.from(prevPage.children);
        prevContents.forEach (function(el) {prevPage.removeChild(el)});
        updateButtons();
        if (i === 0) {
            return new IntroPage();
        } else {
            return new EffectPage(pageList[i]);
        }
    }

    let currentPage = setCurrentPage();
    
    nextButton.addEventListener("click", function(){
        // debugger
        i++;
        currentPage.closeContext();
        currentPage = setCurrentPage();
    })

    prevButton.addEventListener("click", function(){
        // debugger
        console.log('where is the debugger');
        i--;
        currentPage.closeContext();
        currentPage = setCurrentPage();
    })
    
        
    
    const nav = document.getElementById('nav');
    nav.addEventListener("click", function(e){
        i = pageList.indexOf(e.target.id);
        currentPage.closeContext();
        currentPage = setCurrentPage();
    })

    const chartContainer = document.getElementById('chart-container');
    const shapes = imports.graph();
    shapes.forEach ((shape) => {
        chartContainer.append(shape);
        shape.setAttribute('class', 'shape');
    });
    
    const update = function(){
        d3.selectAll('.shape')
            .transition()
            .duration(2000)
            .style('opacity', '100%');
    }
    update();
    
});