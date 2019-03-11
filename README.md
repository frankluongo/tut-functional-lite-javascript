# Functional Lite JavaScript
Kyle Simpson | Pluralsight.com

## Section 1: Pure Functions

### Course Introduction
- Kyle Simpson | @getify / getify.me
  - Created
    - lab.js
    - grips
    - asynquence
  - Works for Maker Square


### Course Agenda
- Functional-Light Programming is totally made up and refers to getting the basics of functional programming
- Course will cover...
  - Pure Functions VS Impure
  - Composition
  - Immutability
  - Closure
  - Recursion
  - List Transformation (Map)
  - List Exclusion (Filter)
  - List Composition (Reduce)
  - List Iteration (forEach)

### Side Effects
- A function that produces a side effect is not a pure function
- A Side Effect is when a function is meant to do one thing, but it impacts somewhere else

Example:<br>
This function is impure because `foo` changes y and z, which are variables outside the scope of the function. If you call `foo` again, it will change the value of y and z, again.
```javascript
function foo (x) {
  y = x * 2;
  z = x * 3;
}
var y, z;
foo(5);
y; // 10
z; //15
```

Example:<br>
This function is pure because every time you pass it the same values, you will get the same output.
```javascript
function bar(x, y, z) {
  foo(x);
  return [y, z];

  function foo(x) {
    y = y * x;
    z = y * x;
  }
}
```

### Exercise 1
- Refer to `exercises/exercise_1.js`

### Exercise 1 Solution, P I
- Refer to `exercises/exercise_1.js`

### Exercise 1 Solution, P II
- At this point in the course, he was answering questions. Nothing note-worthy here.


----


## Section 2: Composition & Immutability

### Manual Composition
- Taking the output of one function and using it as part of the input for another function
Ex.)
```javascript
function sum(x,y) {
  return x + y;
}

function mult(x, y) {
  return x * y;
}

sum ( mult(3,4), 5 );
```

**Manually Composed:**
```javascript
function sum(x,y) {
  return x + y;
}

function mult(x, y) {
  return x * y;
}

function multAndSum(x,y,z) {
  return sum( mult(x, y), z)
}

multAndSum(3,4,5);
```

### Composition Utility
- We can build a simple utility to make this type of thing easier
```javascript
function sum(x,y) {
  return x + y;
}

function mult(x, y) {
  return x * y;
}

function compose2(fn1, fn2) {
  return function comp() {
    var args = [].slice.call(arguments);
    return fn2(
      fn1(args.shift(), args.shift()), args.shift()
    );
  }
}
var multAndSum = compose2(mult, sum);
multAndSum(3,4,5);
```

### Immutability
- The inability to mutate or change something
- `const` provides us with an immutable binding/assignment, not an immutable valuable
```javascript
var x = 2;
x++; // Yes

const y = 3;
y++; // No

const z = [4,5,6];
z = 10; // No
z[0] = 10 // Yes

const w = Object.freeze([4,5,6]);
w = 10; // Nope
w[0] = 10; // Nope
```

### Questions on Immutability
- This will change the array passed into it:
```javascript
function doubleThemMutable(list) {
  for (var i=0; i < list.length; i++) {
    list[i] = list[i] * 2;
  }
}

var arr = [3,4,5];
doubleThemMutable(arr);
arr;
```

- This will not:
```javascript
function doubleThemImmutable(list) {
  var newList = []
  for (var i=0; i < list.length; i++) {
    newList[i] = list[i] * 2;
  }
  return newList;
}

var arr = [3,4,5];
var arr2 = doubleThemImmutable(arr)
arr;
arr2;
```

----


## Section 3: Closure & Recursion

### Closure

### Exercise 2

### Exercise 2 Solution

### Recursion

### Recursive Example

### Exercise 3

### Exercise 3 Solution


----


## Section 4: List Operations

### List Transformation

### List Exclusion

### List Composition

### List Iteration

### Exercise 4

### Exercise 4 Solution, P I

### Exercise 4 Solution, P II

### Exercise 4 Solution, P III

### Exercise 4 Solution, P IV

### Exercise 4 Solution, P V

### Wrap Up
