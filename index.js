/*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Kevin Gisi @cheerskevin
*/

var parseString = require('xml2js').parseString;

module.exports = function(text) {
  this.cacheable && this.cacheable();
  var self = this;
  parseString(text, function(err, result) {
    self.callback(err, !err && "module.exports = " + JSON.stringify(result));
  });
};
