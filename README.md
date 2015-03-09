# nunjuckify

[Nunjucks](http://npmjs.org/package/nunjucks) precompiler for
[Browserify](http://browserify.org).

## Installation

``` bash
npm install nunjuckify
```

## Usage

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

## License

The MIT License (MIT)

Copyright (c) 2015 Michele Piccirillo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.