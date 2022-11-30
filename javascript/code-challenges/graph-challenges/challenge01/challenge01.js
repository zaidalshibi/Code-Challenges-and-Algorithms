'use strict';

function breadthFirst ( graph, root ) {
    let pointer = {};

    for ( let i = 0; i < graph.length; i++ ) {
        pointer[ i ] = Infinity;
    }
    pointer[ root ] = 0;

    let queue = [ root ];
    let current;
    while ( queue.length != 0 ) {
        current = queue.shift();
        let connection = graph[ current ];
        let secPointer = [];
        let idx = connection.indexOf( 1 );
        while ( idx != -1 ) {
            secPointer.push( idx );
            idx = connection.indexOf( 1, idx + 1 );
        }
        for ( let j = 0; j < secPointer.length; j++ ) {
            if ( pointer[ secPointer[ j ] ] == Infinity ) {
                pointer[ secPointer[ j ] ] = pointer[ current ] + 1;
                queue.push( secPointer[ j ] );
            }
        }
    }
    return pointer;
}

module.exports = breadthFirst;