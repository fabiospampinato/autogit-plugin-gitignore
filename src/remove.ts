
/* REMOVE */

function remove ( content, glob ) {

  return content.split ( '\n' ).filter ( line => line !== glob ).join ( '\n' );

}

/* EXPORT */

export default remove;
