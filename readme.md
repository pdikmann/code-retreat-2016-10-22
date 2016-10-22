# Installation

Here's what I used for this one:

- the [Atom](atom.io) text editor
- the [atom-typescript](https://atom.io/packages/atom-typescript) plugin
- [NodeJS](https://nodejs.org/en/) and the corresponding [NPM](https://www.npmjs.com/) package manager
- the [UnitJS](http://unitjs.com/) testing framework and [Mocha](http://unitjs.com/guide/mocha.html) for running them

Because this repo foolishly includes `node_modules` (I have no idea what I'm doing), you _should_ have everything you need except for `typescript-node-definitions`
which you should be able to get with

```
git submodule init
git submodule update
```

# Usage

- open Atom
- browse the source at `./source.ts` (thats *ts* not *js*)
- browse the tests at `./test/source.test.js` (that, on the other hand, is *js* alright)
- run the tests using `npm test` in the project root

# Happy Hacking!
