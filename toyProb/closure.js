/*Nested functions and closures

You can nest a function within a function. The nested (inner) function is private to its containing (outer) function. It also forms a closure. A closure is an expression (typically a function) that can have free variables together with an environment that binds those variables (that "closes" the expression).

Since a nested function is a closure, this means that a nested function can "inherit" the arguments and variables of its containing function. In other words, the inner function contains the scope of the outer function.

To summarize:

    The inner function can be accessed only from statements in the outer function.
The inner function forms a closure: the inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.

The following example shows nested functions:*/

function addSquares(a,b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}
a = addSquares(2,3); // returns 13
b = addSquares(3,4); // returns 25
c = addSquares(4,5); // returns 41

///////////////////////////////////

function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
result = fn_inside(5); // returns 8

result1 = outside(3)(5); // returns 8

///////////////////////////////////

function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z);
        }
        C(3);
    }
    B(2);
}
A(1); // logs 6 (1 + 2 + 3)

///////////////////////////////////

function makeAdder(x) {
// parameter `x` is an inner variable
// inner function `add()` uses `x`, so // it has a "closure" over it
    function add(y) {
        return y + x;
    };
    return add;
}
var plusOne = makeAdder(1);
var plusTen = makeAdder(10);
console.log(plusOne(3));
plusOne(41);
console.log(plusOne(10));

//////// Module //////////
function BlueModule() {
    var something = "cool";
    var another = [1, 2, 3];

    function doThis() {
        console.log(something);
    }

    function doThat() {
        console.log(another.join(" ! "));
    }

    return {
        something: doThis,
        another: doThat
    };
}

var foo = BlueModule();

console.log(foo.something());