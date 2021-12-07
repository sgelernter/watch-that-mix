export class SoloToggle {
    constructor(fullNodes, soloNodes){
        this.fullNodes = fullNodes;
        this.soloNodes = soloNodes;
        this.button = document.createElement('button');
        this.button.innerText = 'S';
        this.button.id = 'solo-button';
        this.button.className = 'not-soloed';
        const that = this;
        this.button.addEventListener("click", function(){

            let solo = that.getCurrentNode(soloNodes);
            let full = that.getCurrentNode(fullNodes);
            if (solo) {
                const soloIdx = soloNodes.indexOf(solo);
                solo.muted = true;
                that.fullNodes[soloIdx].muted = false;
                that.button.className = 'not-soloed';
                d3.selectAll('.shape-dimmed')
                    .attr('class', 'shape');
                d3.select('#FEATURED')
                    .attr('class', 'not-highlighted');
            } else {
                const fullIdx = fullNodes.indexOf(full);
                full.muted = true;
                that.soloNodes[fullIdx].muted = false;
                that.button.className = 'soloed';
                // debugger
                d3.selectAll('.shape')
                    .attr('class', 'shape-dimmed');
                d3.select('#FEATURED')
                    .attr('class', 'highlighted');
            }
        })
        return this.button;
    }
    getCurrentNode(nodesArr) {
        let currentNode;
        nodesArr.forEach (function(node) {
            if (node.muted === false) {
                currentNode = node;
            }
            })
            return currentNode;
        }
    
}

