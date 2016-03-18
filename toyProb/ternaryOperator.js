function fizzy() {
    "use strict";
    let arr = [];
    for (var i = 0; i < 100; i++) {
        arr.push(i);
    }
    let newArr = arr.map(num => !(num % 3) ? !(num % 5) ? "fizzbuzz" : "fizz" : !(num % 5) ? "buzz" : num);
    console.log(newArr);
}
fizzy();

function spinner(str) {
    return str.split(' ').map(word => word.length < 4 ? (word + ": < 4") : word.split('').reverse('').join('')).join(' ');
}