const loaderUtils = require('loader-utils');
const xml2js = require('xml2js');

module.exports = function(source) {
  if (this.cacheable) this.cacheable();
  const callback = this.async();
  const options = loaderUtils.getOptions(this);
  const parser = new xml2js.Parser(options);
  parser.parseString(source, (err, result) => {
    callback(err, !err && `module.exports = ${JSON.stringify(result)}`);
  });
};
