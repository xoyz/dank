var dank = require('./dank.js');

dank.async(function() {
  global.res = dank.randomString(13);
  // global cause inside function
}, function() {
  dank.log('Generated random string: ' + res);
});

console.log('Not really interesting, right?');
dank.log('And why did I used console.log instead of dank.log?');
