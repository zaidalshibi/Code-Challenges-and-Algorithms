const {Tree} = require('./challenge01.js');

describe( 'Tree', () => {
    it( 'should return a tree', () => {
        let preOrder = [ 3, 9, 20, 15, 7 ];
        let inOrder = [ 9, 3, 15, 20, 7 ];
        let tree = Tree( preOrder, inOrder );
        expect( tree.value ).toEqual( 3 );
        expect( tree.left.value ).toEqual( 9 );
        expect( tree.left.left ).toEqual( null );
        expect( tree.left.right ).toEqual( null );
        expect( tree.right.value ).toEqual( 20 );
        expect( tree.right.left.value ).toEqual( 15 );
        expect( tree.right.right.value ).toEqual( 7 );
    } );
} );

describe( 'Tree', () => {
    it( 'should return a tree', () => {
        let preOrder = [ -1 ];
        let inOrder = [ -1 ];
        let tree = Tree( preOrder, inOrder );
        expect( tree.value ).toEqual( -1 );
        expect( tree.left ).toEqual( null );
        expect( tree.right ).toEqual( null );
    } );
} );