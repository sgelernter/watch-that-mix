// import _ from 'lodash';
import { _ } from 'core-js';
import { IntroPage } from './intro_page.js';
import { EffectPage } from './effect_page.js';
import * as imports from './imports.js';
import './reset.css';
import { revealChart } from './charts_setup.js';


document.addEventListener("DOMContentLoaded", (event) => {
    const pageList = ['fullmix', 'eq', 'comp', 'saturate', 'spatial'];
    let i = 0;
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('previous');
    const chartContainer = document.getElementById('chart-container');
    imports.createCharts(chartContainer);

    const updateButtons = function(){
        d3.selectAll('.shape-dimmed')
            .attr('class', 'shape');
        d3.selectAll('.shape-featured-highlighted')
            .attr('class', 'shape-featured');
        switch (i) {
            case 0: 
                prevButton.className = 'invisible';
                nextButton.className = 'visible';
                break;
            case (pageList.length - 1):
                nextButton.className = 'invisible';
                prevButton.className = 'visible';
                break;
            default:
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
            revealChart('fullmix', chartContainer);
            return new IntroPage();
        } else {
            revealChart(pageList[i], chartContainer);
            return new EffectPage(pageList[i]);
        }
    }

    let currentPage = setCurrentPage();
    
    nextButton.addEventListener("click", function(){
        i++;
        currentPage.closeContext();
        currentPage = setCurrentPage();
    })

    prevButton.addEventListener("click", function(){
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
    
});