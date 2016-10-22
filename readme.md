# "Installation"

Here's what I used for this one:

- the [Atom](atom.io) text editor
- the [atom-typescript](https://atom.io/packages/atom-typescript) plugin
- [NodeJS](https://nodejs.org/en/) and the corresponding [NPM](https://www.npmjs.com/) package manager
- the [UnitJS](http://unitjs.com/) testing framework and [Mocha](http://unitjs.com/guide/mocha.html) for running them

Because this repo foolishly includes `node_modules`, you _should_ have everything you need except for `typescript-node-definitions`
which you should be able to get with

```
git submodule init
git submodule update
```

