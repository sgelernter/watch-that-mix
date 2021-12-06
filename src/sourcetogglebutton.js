export const sourceToggler = function(chosenNode, pageNodes){
    const button = document.createElement('button');
    button.innerText = `${chosenNode.title}`;
    button.addEventListener("click", function() {
        pageNodes.forEach (function(node) {
            node.muted = true;
            console.log(`${node.title} should be muted`);
        });
        chosenNode.muted = false;
        console.log(`${chosenNode.title} should be playing`);
    });
    return button;
}