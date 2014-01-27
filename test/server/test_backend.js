/*global describe, it */

(function () {
    "use strict";

    var SRC_PATH = '../../src';

    var assert = require("assert");

    var backend = require(SRC_PATH + '/server/backend.js');
    var mockedData = require('./_mocked-data.js');
    var test_utils = require('./test_utils.js');

    describe('Backend', function() {
        describe('Retrieve Data', function(){
            it('should retrieve two persons for _testteam', function(done) {
                test_utils.assertJsonEqual(mockedData.getAllPersons(), backend.retrieveTeamCheckpoints("_testteam"));
                done();
            });
            it('should retrieve one person for _testalone', function(done) {
                test_utils.assertJsonEqual(mockedData.getEmelineL(), backend.retrieveTeamCheckpoints("_testalone"));
                done();
            });
        });
    });

}());