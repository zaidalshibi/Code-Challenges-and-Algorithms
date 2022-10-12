function breadthFirstCheck ( p, q ) {
    if ( !p && !q ) return true;
    if ( !p || !q ) return false;
    if ( p.value !== q.value ) return false;
    return (
        breadthFirstCheck( p.left, q.left ) &&
        breadthFirstCheck( p.right, q.right )
    );
}

module.exports = breadthFirstCheck;