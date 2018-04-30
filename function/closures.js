// Closures
var helloWorld = function() {
  var msg = 'Hello World!';
  return function() {
    return msg;
  };
};

console.log(helloWorld);
console.log(helloWorld());
console.log(helloWorld()()); // calling the internal function

var helloEverybody = function() {
  var message = 'Hello everybody!';
  return function() {
    return message;
  };
};

var fnHelloEverybody = helloEverybody();
console.log(fnHelloEverybody()); // calling the internal function
