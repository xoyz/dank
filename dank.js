function async(fn, cb) {
  setTimeout(function() {
    fn();
    if(cb) {
      cb();
    }
  }, 0);
}

function sync(fn) {
  fn();
}

function select(val) {
  return document.querySelector(val);
}

function log(val) {
  console.log(val);
}

function randomString(val) {
  var text = '';
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for(i=0; i < val; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

function ucfirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getLocalItems() {
  for(i = 0; i < localStorage.length; i++) {
    window.localItems.push(window.localStorage.getItem(window.localStorage.key(i)));
  }
  return localItems;
}

function setLocal(name, val) {
  window.localStorage.setItem(name, val);
}

function getLocal(name) {
  return window.localStorage.getItem(name);
}