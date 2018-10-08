# Autogit Plugin - .gitignore

A plugin for manipulating `.gitignore`.

## Install

```sh
npm install --save autogit-plugin-gitignore
```

## Usage

#### Options

This plugin uses the following options object:

```js
{
  add: [], // Array of globs to add
  remove: [] // Array of globs to remove
}
```

#### Configuration

Add this plugin to a command:

```js
const gitignore = require ( 'autogit-plugin-gitignore' );

module.exports = {
  commands: {
    'my-command': [
      gitignore ({ /* YOUR OPTIONS */ })
    ]
  }
}
```

## License

MIT © Fabio Spampinato
