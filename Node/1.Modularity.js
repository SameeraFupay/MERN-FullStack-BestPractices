// user.js
module.exports = function (name) {
    return {
      name: name,
      sayHello: function () {
        console.log(`Hello, my name is ${this.name}`);
      },
    };
  };
  
  // index.js
  const userModule = require('./user');
  const user = userModule('John Doe');
  user.sayHello();