const breadthFirst = require( './challenge01.js' );

describe( 'breadthFirst', () => {
    it( 'should return the correct output', () => {
        let graph = [
            [ 0, 1, 1, 0, 0, 0, 0, 0, 0, 0 ],
            [ 1, 0, 0, 1, 1, 0, 0, 0, 0, 0 ],
            [ 1, 0, 0, 0, 0, 1, 1, 0, 0, 0 ],
            [ 0, 1, 0, 0, 0, 0, 0, 1, 0, 0 ],
            [ 0, 1, 0, 0, 0, 0, 0, 1, 1, 0 ],
            [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 1 ],
            [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 1 ],
            [ 0, 0, 0, 1, 1, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ],
            [ 0, 0, 0, 0, 0, 1, 1, 0, 1, 0 ]
        ];
        let root = 0;
        let result = breadthFirst( graph, root );
        expect( result ).toEqual( { "0": 0, "1": 1, "2": 1, "3": 2, "4": 2, "5": 2, "6": 2, "7": 3, "8": 3, "9": 3 } );
    } );

    it( 'should return the correct output', () => {
        let graph = [
            [ 0, 1, 1, 0, 0, 0, 0, 0, 0, 0 ],
            [ 1, 0, 0, 1, 1, 0, 0, 0, 0, 0 ],
            [ 1, 0, 0, 0, 0, 1, 1, 0, 0, 0 ],
            [ 0, 1, 0, 0, 0, 0, 0, 1, 0, 0 ],
            [ 0, 1, 0, 0, 0, 0, 0, 1, 1, 0 ],
            [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 1 ],
            [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 1 ],
            [ 0, 0, 0, 1, 1, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ],
            [ 0, 0, 0, 0, 0, 1, 1, 0, 1, 0 ]
        ];
        let root = 1;
        let result = breadthFirst( graph, root );
        expect( result ).toEqual( { "0": 1, "1": 0, "2": 2, "3": 1, "4": 1, "5": 3, "6": 3, "7": 2, "8": 2, "9": 3 } );
    } );
} );