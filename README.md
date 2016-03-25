# dank
> Just a small library of some useful functions that I use almost everyday in web development!

No dependencies, seriously, this doesn't need one. And doesn't need jQuery either LUL.

## Installation
Download dank.js
Add it to your page with `<script src="path-to-dank"></script>`

Or to your node app with `var dank = require('dank')`

## API

### select
> Selects something in DOM
```
var result = dank.select('#app');
```

### log
> Console.log shorthand
```
dank.log('Something to output');
```

### randomString
> Returns random string with defined length
```
var result = dank.randomString(7);
```

### setLocal
> Set localStorage item
```
dank.setLocal('item_name', 'value');
```

### getLocal
> Get localStorage item
```
var result = dank.getLocal('item_name');
```

### getLocalItems
> Returns all localStorage items as Array
```
var result = dank.getLocalItems();
```

### ucfirst
> Make a string's first character uppercase (Same as in PHP)
```
dank.ucfirst('just some string');
```

### async
> Just basic async function with setTimeout
// this means it's happening in one thread and so there are no performance benefits
```
dank.async(function() {
  // let's load something with jQuery
  $.get('page.php');
  dank.log('First');
}, function() {
  dank.log('Second');
});
```
