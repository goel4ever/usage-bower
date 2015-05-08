/**
 * Created by agoel on 5/7/15.
 */

'use strict';

var bower = require('bower');

// Code to install a package
// TODO: Installation does not work second time if cached.
bower.commands
  .install(['jquery'], { save: true }, { /* custom config */ })
  .on('end', function (installed) {
    console.log('Install : End of task : ' + installed);
  })
  .on('error', function(err) {
    console.log('Install : Error in task : ' + err);
  })
  .on('log', function(log) {
    if(log && log.level) {
      console.log('Install : ' + log.level + ' : ' + log.id + ' : ' + log.message);
    } else {
      console.log('Install : Logging task : ' + log);
    }
  })
  .on('prompt', function(prompt) {
    console.log('Install : Prompt in task : ' + prompt);
  });

// Code to search a package
// TODO: Search fails when packaged is cached. Look into it.
bower.commands
  .search('jquery', {})
  .on('end', function (results) {
    console.log('Search : End of task : ' + results);
  })
  .on('error', function(err) {
    console.log('Search : Error in task : ' + err);
  })
  .on('log', function(log) {
    if(log && log.level) {
      console.log('Search : ' + log.level + ' : ' + log.id + ' : ' + log.message);
    } else {
      console.log('Search : Logging task : ' + log);
    }
  })
  .on('prompt', function(prompt) {
    console.log('Search : Prompt in task : ' + prompt);
  });
