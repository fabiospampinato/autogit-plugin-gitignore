
/* IMPORT */

import * as _ from 'lodash';
import * as fs from 'fs';
import * as path from 'path';
import add from './add';
import remove from './remove';

/* AUTOCOMMIT */

const defaultOptions = {
  add: [],
  remove: []
};

function factory ( options? ) {

  options = Object.assign ( {}, defaultOptions, options );

  return async function gitignore ( config, repoPath, ctx, task ) {

    if ( !options.add.length && !options.remove.length ) return task.skip ( 'You need to provide some globs to add/remove' );

    const gitignorePath = path.join ( repoPath, '.gitignore' );

    let initialContent = '',
        content = initialContent;

    try {

      content = initialContent = fs.readFileSync ( gitignorePath, { encoding: 'utf8' } );

    } catch ( e ) {}

    task.output = `Adding ${options.add.length} ${options.add.length === 1 ? 'glob' : 'globs'}...`;

    content = options.add.reduce ( add, content );

    task.output = `Removing ${options.remove.length} ${options.remove.length === 1 ? 'glob' : 'globs'}...`;

    content = options.remove.reduce ( remove, content );

    if ( content === initialContent ) return task.skip ( 'No need to update .gitignore' );

    task.output = 'Updating .gitignore...';

    if ( config.dry ) return task.skip ();

    fs.writeFileSync ( gitignorePath, content );

    task.output = 'Updated .gitignore';

  };

}

/* EXPORT */

export = Object.assign ( factory, { default: factory } );
