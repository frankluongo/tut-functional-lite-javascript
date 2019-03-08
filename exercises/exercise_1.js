// Starting Point

function foo(x) {
	y++;
	z = x * y;
}

var y = 5, z;

foo(20);
z;		// 120

foo(25);
z;		// 175

// My Solution

function bar (x) {
  var y = 5, z;
  multipler (x);
  return z;

  function multipler(x) {
    y++;
    z = x * y;
  }
}

// Course Solution

function bar (x, y) {
  var z;
  foo(x);
  // * only return things that have changed
  return [y, z];

  function foo (x) {
    y++;
    z = x * y;
  }
}

bar(20, 5);
