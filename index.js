var protagonist = require('protagonist');
var hoek = require('hoek');
var fs = require('fs');

var getAST = function (pathToFile) {

    var options = (typeof arguments[1] === 'object' ? arguments[1] : {});
    var callback = (typeof arguments[1] === 'object' ? arguments[2] : arguments[1]);

    hoek.assert(typeof callback === 'function', 'A callback is needed.');

    fs.readFile(pathToFile, { encoding: 'utf8' }, function (err, contents) {

        if (err) {
            return callback(err);
        }
        protagonist.parse(contents, function (err, result) {
            if (err) {
                return callback(err);
            }
            return callback(null,result.warnings,result.ast);
        });
    });
};

exports.getAST = getAST;
