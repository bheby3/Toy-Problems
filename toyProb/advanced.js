"use strict";

//import exProto from "constructorFunction";

//function sweet() {
//    console.log(exProto.doSomething);
//}
//
//sweet();
//console.log(exProto.doSomething);
var text = "outer";
function logIt() {
    console.log(text);
    var text = "inner";
}

logIt();

var array = [0, 1, 2, 3, 4, 5, 7, 8];

function missingNo(numArray) {

    for (var i = 0; i < numArray.length; i++) {
        console.log(numArray[i]);
        console.log(i);

        if (i - numArray[i] !== 0) {
            return i;
            break;
        }

    }
}

//var answer = missingNo(array);

missingNo(array);

var longest = "Hey where is the longest word";

function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

console.log(longestWord(longest));

var str = "xxooxoxooxOxX"
var str = "XoXoxoX"

function exOh(str) {
    //code here
    var x = [];
    var o = [];

    for (var i = 0; i < str.length; i++) {
        if ((str[i] === "x") || (str[i] === "X")) {
            x.push(str[i])
        } else {
            o.push(str[i]);
        }
    }
    
    if (x.length === o.length) {
        return true;
    } else {
        return false;
    }
}

console.log(exOh(str));

/*function scope() {
 var a = b = 5;
 }
 scope();
 console.log(b);*/

var str = "hello capitalize the first letter of each word!"

/*function letterCapitalize(str) {
    //code here
    str.split("");
    
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            str[i].charAt(1).toUpperCase();
        }
    }
}
console.log(letterCapitalize(str));*/

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

console.log(toTitleCase(str));

/*function primeNumberFinder() {

    for (var counter = 0; counter <= 100; counter++) {

        var flagNotPrime = false;

        for (var i = 2; i <= counter; i++) {
            if (counter % i === 0 && i !== counter) {
                notPrime = true;
            }
        }
        if (flagNotPrime === false) {
            console.log(counter);
        }
    }
}

console.log(primeNumberFinder());*/


//////////////  factorial ////////////


str = "hello world"

function LetterChanges(str) {
    return str.replace(/[a-zA-Z]/g, function (c) {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }).replace(/[aeiou]/g, function (c) {
        return c.toUpperCase();
    });
}

console.log("letter change");
console.log(LetterChanges(str));

//////////////////////////////////

function SimpleAdding(num) {
    var addNum = [];

    for (var i = 1; i <= num; i++) {
        addNum.push(i)
    }
    num = addNum.reduce(function (a, b) {
        return a + b;
    })
    // co
    // code goes here
    return num;
}
console.log(SimpleAdding(8));

/////// find longest word //////

//takes a string, splits at space, pushes into array,
// loops through array, counts letters in each word.

var sen = "coderbyte is da";

function LongestWord(sen) {
    var str = sen.split(" ");
    console.log(str);
    var longest = 0;  //counts letters & compares to longest word
    var sen = null; //puts longest word in sen
    for (var i = 0; i < str.length - 1; i++) {
        if (str.length === 0) {
            sen = str[i]
        }
        else if (longest < str[i].length) {
            longest = str[i].length;
            sen = str[i];
        }
    }

    return sen;
}

console.log(LongestWord(sen));



/////stock ticker/////

/*var arr = [2, 4, 5, 63, 67, 43, 2, 35]
function stockTip() {
    var diff = 0;
    var buyIndex = [i]
    var smallest = arr[0]; //2
    var sellIndex = [i]

    for (var i = 0; i < array.length; i++) {
        if (arr[i] > smallest) {
            smallest = arr[i];
        }
        if ((arr[i] - smallest) > diff) {

        }

    }
}*/

//var str = "Dave:Jill; Mike:Dave; Jane:Dave; Stew:Mike";
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function (otherName) {
    return "Hi " + otherName + ", my name is " + name;
}


var person = new Person("Brandon")

//////////////////////////////////

var arr = ["joe", "alex", "becky", "george"];

function likes(names) {
    if (names.length === 0) {
        return "no one likes this";
    } else if (names.length === 1) {
        return names[0] + " likes this";
    } else if (names.length === 2) {
        return names[0] + " and " + names[1] + " like this";
    } else if (names.length === 3) {
        return names[0] + ', ' + names[1] + ' and ' + names[2] + " like this";
    } else if (names.length > 3) {
        return names[0] + ", " + names[1] + ' and ' + (names.length - 2) + " others like this";
    }
}

//////////////////////////////////

var strings = "hey there string!";

function reverses(str) {
    var rev = str.split(' ');
    var reversed = [];
    for (var i = 0; i < rev.length; i++) {
        if (rev[i].length >= 5) {
            reversed.push(rev[i].split('').reverse().join(''));
        } else {
            reversed.push(rev[i]);
        }
    }
    return reversed.join(' ');
}

//////////////////////////////////

// splice out smallest number in array //

var arr = [1, 2, 3, 4, 5, 6];

function removeSmallest(numbers) {
    //throw "TODO: removeSmallest";
    if (numbers.length === 0) {
        return numbers
    } else if (numbers.length > 0) {
        var lowest = numbers[0];
        for (var i = 0; i < numbers.length; i++) {
            if (numbers[i] < lowest) {
                lowest = numbers[i];
            }
        }
    }

    numbers.splice(numbers.indexOf(lowest), 1);
    console.log(numbers);
    return numbers;

}

removeSmallest(arr);
//////////////////////////////////

function removeSmallests(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}
//////////////////////////////////