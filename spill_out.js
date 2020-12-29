// dynamically add a file, including its parent directory

var path = require('path');
var beautify = require(path.join(__dirname, 'jsfile', 'beautify.js'));
var data_in = "{'name':'Chukwudi Nwachukwu', 'bio':{'nickname':'ichux', 'twitter':'zuoike', 'bitbucket':'ichux'}}";

console.log(beautify.js_beautify(data_in));
console.log(beautify.js_beautify(data_in, {'indent_size': 1, 'indent_char': ' '}));
console.log(beautify.js_beautify(data_in, {'indent_size': 1, 'indent_char': '\t'}));
