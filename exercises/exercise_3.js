/*
? Instructions
* Turn `mult(..)` into a recursive function that can work on as many arguments as necessary.
*/

// * Course Starting Point
// ? ----------------------------------

function mult(x,y,z) {
	return x * y * z;
}

mult(3,4,5);	// 60
mult(3,4,5,6);	// Oops!

// * My Solution
// ? ----------------------------------

function mult(...args) {
  // This is the base case that will stop it
  // Here, we see if we have two arguments and just multiply them
  if (args.length <= 2) {
    return args[0] * args[1];
  }
  // Otherwise, we multiply the argument by the function itself with the first parameter sliced off
  return (
    args[0] * mult(...args.slice(1))
  )
}

mult(3,4,5);
mult(3,4,5,6);

// * Course Solution
// ? ----------------------------------

// ^ Same as my solution
