'use strict';
/*
JAVASCRIPT IS : 

1) HIGH LEVEL --> Hardware level abstraction unlike languages like C so that we dont need to manage hardware resources like
                  memory. Downside of this is programs will never be as fast as non abstracted language.
                  
2) GARBAGE COLLECTED --> Javascript engine which removes old un wanted objects from memory so that it does not clog the memory.

3) INTERPRETED OR JUST IN TIME COMPILED --> Javascript engine compiles human readable code to machine code ( 0 and 1 ) line by line.

4) MULTI-PARADIGM --> Paradigm(Imperative or Declarative) is an approach of structuring code. Three paradigms in Javascript :
                      -> Procedural Programming - Organising code in linear way with some functions in between.
                      -> Object Oriented Programming(OOP) 
                      -> Functional Programming
                      
5) PROTOTYPE-BASED OBJECT-ORIENTED --> Almost everything in Javascript is objects except primitive things like numbers, strings etc.
                                       eg : Array object inherits methods from Array prototype.
                                       
6) FIRST CLASS FUNCTIONS --> Functions are treated as variables. We can pass them into functions and return them from other functions.
                             This is very powerful and is called functional programming.
                             
7) DYNAMIC --> No type defenitions required. Types are decided at runtime. Datatype of variable is automatically changed(Type coercion).
               Javascript with strong types is Typescript.
               
8) SINGLE-THREADED --> Javascript runs in a single thread. So it can do only one thing at a time.

9) NON-BLOCKING EVENT LOOP --> To overcome the single threaded nature, Javascript engine has a concurrency model so that it can run
                               multiple tasks at same time so that we have a non-blocking nature. This is done using an event loop.
                               Long running tasks are put in background and they join the main thread once they are finished.

JAVASCRIPT ENGINE : 

Program that execute Javascript code. Google chrome and NodeJS use google's V8 engine. Other browsers might use its own versions of 
javascript engines.

Engine comprises of : 

1) Call Stack --> This is where our code is executed using execution contexts.

2) Heap --> Where objects are stored in memory

COMPILED VS INTERPRETED : 

These are manners in which source code is coverted to machine code

1) COMPILED --> Entire code is converted to machine code at once and written to binary file that can be executed by computer.

2) INTERPRETED --> Interpreter runs through source code and executes it line by line. Code still needs to be converted to machine code.

3) JUST-IN-TIME(JIT) COMPILATION

Entire source code is converted to machine code and executed immediately. No portable binary file is created in this process. With this
the code is not slow like interpreted engine.

Javascript uses JIT Compilation.
*/
///////////////////////////////////////
// Scoping in Practice

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();


///////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


///////////////////////////////////////
// The this Keyword in Practice
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();


///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);


///////////////////////////////////////
// Objects vs. primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);


///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
*/

