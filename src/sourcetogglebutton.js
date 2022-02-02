export const sourceToggler = function(chosenNode, mainNodes, soloNodes, soloButton){
    
    const button = document.createElement('button');
    button.className = 'toggle not-selected';
    const pageNodes = mainNodes.concat(soloNodes);
    
    button.innerText = `${chosenNode.title}`;

    button.addEventListener("click", function() {
        pageNodes.forEach (function(node) {
            node.muted = true;
        });
        document.querySelectorAll('.toggle').forEach (button => button.className = 'toggle not-selected');
        if (soloButton.className === 'soloed') {
            soloNodes[mainNodes.indexOf(chosenNode)].muted = false;
        } else {
            chosenNode.muted = false;
        }
        this.className = 'toggle selected';
    });
    
    return button;
}