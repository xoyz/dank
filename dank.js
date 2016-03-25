(function (global) {
    'use strict';

    var i,
        localItems = [];

    var dank = {
      async: function(fn, cb) {
        setTimeout(function() {
          fn();
          if(cb) {
            cb();
          }
        }, 0);
      },

      sync: function(fn) {
        fn();
      },

      select: function(val) {
        return document.querySelector(val);
      },

      log: function(val) {
        console.log(val);
      },

      randomString: function(val) {
        var text = '';
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for(i=0; i < val; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
      },

      ucfirst: function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      },

      getLocalItems: function() {
        for(i = 0; i < localStorage.length; i++) {
          window.localItems.push(window.localStorage.getItem(window.localStorage.key(i)));
        }
        return localItems;
      },

      setLocal: function(name, val) {
        window.localStorage.setItem(name, val);
      },

      getLocal: function(name) {
        return window.localStorage.getItem(name);
      }
    };

    if (typeof define === 'function' && define.amd) {
        define(function() {
          return dank;
        });
    } else if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = dank;
        }
        exports.dank = dank;
    } else {
        global.dank = dank;
    }
})(this);
