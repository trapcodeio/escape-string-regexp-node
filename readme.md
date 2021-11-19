# escape-string-regexp-node

> Escape RegExp special characters in Node.js

Written originally by [sindresorhus (escape-string-regexp)](https://github.com/sindresorhus/escape-string-regexp)

## Install

```
$ npm install escape-string-regexp-node
```

## Usage

```ts
const escapeRegexp = require("escape-string-regexp-node");
// Typescript
import escapeRegexp from 'escape-string-regexp-node';

const escapedString = escapeRegexp('How much $ for a 🦄?');
//=> 'How much \\$ for a 🦄\\?'

new RegExp(escapedString);
```

You can also use this to escape a string that is inserted into the middle of a regex, for example, into a character
class.

---