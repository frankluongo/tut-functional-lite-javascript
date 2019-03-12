/*
? Instructions
* 1. Write two functions, each which return a different number value when called.
* 2. Write an `add(..)` function that takes two numbers and adds them and returns the result. Call `add(..)` with the results of your two functions from (1) and print the result to the console.
* 3. Write an `add2(..)` that takes two functions instead of two numbers, and it calls those two functions and then sends those values to `add(..)`, just like you did in (2) above.
* 4. Replace your two functions from (1) with a single function that takes a value and returns a function back, where the returned function will return the value when it's called.
* 5. Write an `addn(..)` that can take an array of 2 or more functions, and using only `add2(..)`, adds them together. Try it with a loop. Try it without a loop (recursion). Try it with built-in array functional helpers (map/reduce).
* 6. Start with an array of odd and even numbers (with some duplicates), and trim it down to only have unique values.
* 7. Filter your array to only have even numbers in it.
* 8. Map your values to functions, using (4), and pass the new list of functions to the `addn(..)` from (5).
* 9. Bonus: write tests for your functions.
*/

// * Solution
// ? ------------------------------------------------------


// ! Part 1. ----------------------------------------------


function foo() {
  return 10;
}

function bar () {
  return 42;
}


// ! Part 2. ----------------------------------------------


function add (x,y) {
  return x + y;
}


// ! Part 3. ----------------------------------------------


function add2(fn1, fn2) {
  return add( fn1(), fn2() );
}

add2(foo,bar); // 52


// ! Part 4. ----------------------------------------------


function foo2(x) {
  return function () {
    return x;
  };
}

add2(foo2(10), foo2(42)); // 52


// ! Part 5. ----------------------------------------------


function addNLoop(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = add2( foo(arr[i]), foo(sum) )
  }
  return sum;
}

function addNRecur(arr) {
  if (arr.length <= 2) {
    return add2( foo(arr[0], arr[1]) );
  }

  return addNRecur.apply([
    function () {
      return add2(arr[0], arr[1]);
    }]
    .concat(arr.slice(2))
  );
}

function addNReduce(arr) {
  arr.slice(1).reduce(function(prev,cur) {
    return function () {
      return add2(prev, cur);
    }
  }, arr[0])()
}

function addN(...arr) {
  arr.reduce(function(prev,cur) {
    return function () {
      return add2(prev, cur);
    }
  }, foo(0))()
}

function addNMap(arr) {
  arr.reduce(function(prev,cur) {
    return function () {
      return add2(prev, cur);
    }
  }, foo(0))()
}

addNLoop(10,42,56,73);
addNRecur(10,42,56,73);
addNReduce([foo(10),foo(42),foo(56),foo(73)]);
addNMap(
  [10,42,56,73].map(foo)
);


// ! Parts 6, 7, 8 ----------------------------------------

function isOdd(x) { return x  % 2 == 1; }
function isEven(x) { return !isOdd(x); }

function addNMap2(arr) {
  arr.reduce(function(prev,cur) {
    return function () {
      return add2(prev, cur);
    }
  }, foo(0))()
}

var arr = [10,42,56,73,15,2,98,7];


arr = arr.filter(isEven);
arr = arr.map(foo);

addNMap2(arr);
