var counter = 0;
var add = function() {
  return ++counter;
};
console.log(add());
console.log(add());
console.log(add());
console.log(add());

var itens = [];
//redefining the add function
var add = function(item) {
  itens.push(item);
  return itens;
};
console.log(add('A'));
console.log(add('B'));
console.log(add('C'));
console.log(add('D'));

console.log(add()); // undefined is added in array

console.log();
console.log('Usando o conceito de encapsulamento');
// Using the encapsulation concept (working with objects)
// Encapsulation by means of objects
var counter = {
  value: 0,
  add: function() {
    return ++this.value;
  }
};

console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

var itens = {
  value: [],
  add: function(item) {
    this.value.push(item);
    return this.value;
  }
};
console.log(itens.add('Antonio'));
console.log(itens.add('José'));
console.log(itens.add('Marcos'));

console.log(counter.add());
// Observation: It is possível access the contents of the object externally
console.log(counter.value = undefined);
console.log(counter.add()); // NaN

// Encapsulation by means of functions
// A function is a object that contains an executable code block.
// The code block is isolated and can not be accessed externally

var testCounter = function() {
  var value = 0;
  var add = function() {
    return ++value;
  };
};
// console.log(testCounter.value); // undefined
// console.log(testCounter.add()); // undefined

// add function encapsulation (use of the factry function concept)
var createCounter = function() {
  var value = 0;
  return { // return is used to expose the add function (public access)
    add: function() {
      return ++value;
    }
  };
};
var counter = createCounter();
console.log(counter.value); // undefined
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

// add function encapsulation (use of the constructor function concept)

var Counter = function() {
  var value = 0;
  this.add = function() { // this is used to expose the add function (public access)
    return ++value;
  };
};

var counter = new Counter();
console.log(counter.value); // undefined
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
