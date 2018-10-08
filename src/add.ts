
/* IMPORT */

import * as _ from 'lodash';

/* ADD */

function add ( content, glob ) {

  const lines: string[] = content.split ( '\n' ),
        lineGlob = lines.find ( line => line === glob );

  if ( lineGlob ) return content; // Already present

  const lastIndex = _.findLastIndex ( lines, line => !!line.trim ().length ) || 0;

  lines.splice ( lastIndex + 1, 0, glob );

  return lines.join ( '\n' );

}

/* EXPORT */

export default add;
