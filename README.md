# nunjuckify

[Nunjucks](http://npmjs.org/package/nunjucks) precompiler for
[Browserify](http://browserify.org).

## Installation ##

``` bash
npm install nunjuckify
```

## Usage ##

If you're compiling your code from the command-line, include `-t nunjuckify`:

``` bash
browserify -t nunjuckify index.js -o bundle.js
```

From the API:

``` javascript
b.transform('nunjuckify', { 
    context: { template: 1, variables: 2, here: 3 },
    environment: new Environment(/* .. */) // optional, to add custom loaders, etc
    filter: /\.js\.nunjucks$/ // optional, to filter which extensions are transformed by the extension
})
```