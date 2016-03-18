
function walkTree(node) {
    if (node == null) //
        return;
    // do something with node
    for (var i = 0; i < node.childNodes.length; i++) {
        walkTree(node.childNodes[i]);
    }
}


