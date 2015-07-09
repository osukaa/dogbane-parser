var Code = require('code');
var expect = Code.expect;
var Lab = require('lab');
var lab = exports.lab = Lab.script();

var onion = require('../index');

lab.experiment('getAST', function () {

    lab.test('sends an options object', function (done) {

        onion.getAST(__dirname + '/markdown/test.md', { something: 'something'}, function (err, warnings, tree) {

            expect(err).to.not.exist();
            expect(warnings).to.be.an.array();
            expect(warnings).to.be.empty();
            expect(tree).to.exist();
            expect(tree).to.be.an.object();
            done();
        });
    });

    lab.test('file does not exist', function (done) {

        onion.getAST(__dirname + '/markdown/doesnot.md', { something: 'something'}, function (err, warnings, tree) {

            expect(warnings).to.not.exist();
            expect(tree).to.not.exist();
            expect(err).to.exist();
            done();
        });
    });

    lab.test('returns AST with no errors or warnings', function (done) {

        onion.getAST(__dirname + '/markdown/test.md', function (err, warnings, tree) {

            expect(err).to.not.exist();
            expect(warnings).to.be.an.array();
            expect(warnings).to.be.empty();
            expect(tree).to.exist();
            expect(tree).to.be.an.object();
            done();
        });
    });
});
