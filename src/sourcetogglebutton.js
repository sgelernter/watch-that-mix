export const sourceToggler = function(chosenNode, mainNodes, soloNodes, soloButton){
    const button = document.createElement('button');
    const pageNodes = mainNodes.concat(soloNodes);
    
    button.innerText = `${chosenNode.title}`;

    button.addEventListener("click", function() {
        pageNodes.forEach (function(node) {
            node.muted = true;
        });
        if (soloButton.className === 'soloed') {
            soloNodes[mainNodes.indexOf(chosenNode)].muted = false;
        } else {
            chosenNode.muted = false;
        }
    });
    
    return button;
}