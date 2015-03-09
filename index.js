var nunjucks = require('nunjucks');
var through  = require('through');

module.exports = function(file, options) {
  var filter      = options.filter || /\.js\.nunjucks$/;
  var context     = options.context || {};
  var environment = options.environment || nunjucks;

  if (!filter.test(file)) return through();

  var buffer = "";

  return through(function write(chunk) {
    buffer += chunk;
  }, function end() {
    this.queue(environment.renderString(buffer, context));
    this.queue(null);
  });
};