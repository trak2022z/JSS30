'use strict';
(function() {
    window.addEventListener('load', init);

    function init() {

      //Condition
      let a = false;
      //let a = true;

// Create a Promise
let promise = new Promise(function(resolve, reject) {
  if(a){
    resolve('Resolving a fake Promise.');
  } else {
    reject('Rejecting a fake Promise to handle with .catch().');
  }
    
});

// Handle it using the .then() handler
promise.then(function(value) {
    console.log(value);
})

// Handle it using the .then() handler
promise.catch(function(value) {
    console.error(value);
});


      
    }

})();