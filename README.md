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

### Composition Utility

### Immutability

### Questions on Immutability

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
