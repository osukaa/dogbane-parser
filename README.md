# onion

Onion is our module to convert markdown [API Blueprint](https://github.com/apiaryio/api-blueprint/blob/master/API%20Blueprint%20Specification.md) files into an abstract syntax tree.

## Usage

```javascript
var onion = require('onion');

onion.getAST('path/to/file', function (err, warnings, tree) {

});
```
Parameters

* `pathToFile` is the path to the markdown file to parse.
* `options` is an optional object (currently WIP)
* `callback` the callback with the following parameters
    * `err` any error obtained while getting file or parsing it.
    * `warnings` an array of the parser warnings as occurred during the parsing
    * `tree` the abstract syntax tree (AST) of the parsed blueprint. The structure is [here](https://github.com/apiaryio/api-blueprint-ast#example-json-serialization).
