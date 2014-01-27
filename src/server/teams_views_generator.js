// /*global console */

// (function() {
//     "use strict";

//     var Handlebars = require('Handlebars');
//     initHandlebars();

//     var utils = require('./utils.js');
//     var backend = require('./backend.js');

//     var generateEditHtml = function(teamname, callback) {
//         generateTemplatedHtml('src/client/last-checkpoint-template.html', backend.retrieveData(teamname), callback);
//     };
//     exports.generateCheckpointsHtml = generateCheckpointsHtml;

//     var generateResultsHtml = function(teamname, callback) {
//         generateTemplatedHtml('src/client/individual-results-template.html', backend.retrieveData(teamname), callback);
//     };
//     exports.generateResultsHtml = generateResultsHtml;

//     var generateTeamNotFoundHtml = function(teamname, callback) {
//         generateTemplatedHtml('src/client/team-not-found-template.html', {'teamname': teamname}, callback);
//     };

//     exports.generateIndexHtml = function(teamname, callback) {
//         try {
//             generateResultsHtml(teamname, function(generatedResultsHtml) {
//                 generateCheckpointsHtml(teamname, function(generatedCheckpointsHtml) {
//                     var indexData = {
//                         'last-checkpoints': generatedCheckpointsHtml,
//                         'individual-results': generatedResultsHtml
//                     };
//                     generateTemplatedHtml('src/client/index-template.html', indexData, callback);
//                 });
//             });
//         }
//         catch(err) {
//             // team doesn't exist, render the team creation interface
//             generateTeamNotFoundHtml(teamname, function(generatedHtml) {
//                 callback(generatedHtml);
//             });
//         }
//     };

//     function generateTemplatedHtml(templatePath, data, callback) {
//         utils.getContentOf(templatePath, function (source) {
//             var template = Handlebars.compile(source);
//             var result = template(data);
//             callback(result);
//         });
//     }

//     function initHandlebars() {
//         Handlebars.registerHelper("last", function(array, options) {
//             return options.fn(array[array.length-1]);
//         });
//     }

// }());
