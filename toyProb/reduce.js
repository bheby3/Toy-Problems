function FirstFactorial(num) {
    var arr = [];
    //var arrReversed = arr.reverse();
    // code goes here
    for (var i = num; i > 0; i--) {
        arr.unshift(i);
    }
    num = arr.reduce(function (a, b) {
        return a * b;
    });
    return num;
}
console.log(FirstFactorial(8));
// keep this function call here
//console.log(FirstFactorial(8));
[1, 2, 3].reduce(function (a, b) {
    return a * b;
});

var total = [1, 2, 3, 4, 5, 6, 7, 8].reduce(function (a, b) {
    return a * b;
});

console.log(total);
