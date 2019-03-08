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
