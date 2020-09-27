const { parse } = require('graphql');
const { readFileSync } = require('fs');

module.exports = function (docString, config) {
  return parse(readFileSync(docString, { encoding: 'utf-8' }));
};
