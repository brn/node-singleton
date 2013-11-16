# Simple singleton getter fro NodeJs

#Installation

[npm](http://npmjs.org)

  $ npm install node-singleton-getter

#Usage
```javascript
  var addSingletonGetter = require('node-singleton-getter');

  function SingletonClass() {}
  SingletonClass.prototype.hello = function() {
    console.log('Hello Node.');
  }
  //Call node-singleton-getter with the constructor
  //to attach 'instance' property.
  addSingletonGetter(SingletonClass);

  //To use singleton class,
  //simply access to the 'instance' static property.
  var instance = SingletonClass.instance;

  //console output 'Hello Node.'
  instance.hello();
```