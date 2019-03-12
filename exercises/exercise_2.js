/*
? Instructions
* Define `foo(..)` so that it produces a function which remembers only the first two arguments that were passed to `foo(..)`, and always adds them together.
*/


// * Course Starting Point
// ? ----------------------------------

function foo() { /* */}

var x = foo(3,4);

x();
x();


// * My Solution
// ? ----------------------------------

function foo(x, y) {
  return function() {
    return x + y;
  }
}

var x = foo(3,4);

x();
x();

// * Course Solution
// ? ----------------------------------

// ^ Same as my solution
