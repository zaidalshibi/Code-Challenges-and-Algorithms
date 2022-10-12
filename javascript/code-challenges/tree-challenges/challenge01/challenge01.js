'use strict';

function Node ( value, left = null, right = null ) {
    this.value = value;
    this.left = left;
    this.right = right;
}

function Tree ( preOrder, inOrder ) {
    if ( inOrder.length === 0 ) return null;
    if ( preOrder.length === 0 ) return null;
    const root = preOrder[ 0 ];
    let bT = new Node( root );
    let rootIndex = inOrder.indexOf( root );
    bT.left = Tree( preOrder.slice( 1, rootIndex + 1 ), inOrder.slice( 0, rootIndex ) );
    bT.right = Tree( preOrder.slice( rootIndex + 1 ), inOrder.slice( rootIndex + 1 ) );
    return bT;
};


module.exports = { Node, Tree };