/**
 * Created by brandonhebbert on 3/11/16.
 */
//"use strict";

/*Object.Prototype.constructor*/
function CoolProto() {

    var something = "cool";
    var anotherThing = [1,2,3];

    return {

        doSomething: something,

        anotherThing : anotherThing.join(" ! "),

        o: {},
        //o.constructor === Object; // true

        a: [],
        //a.constructor === Array; // true

        n: new Number(3)
        //n.constructor === Number;
}

}

console.log("this");
var exProto = CoolProto();

/*console.log(exProto.doSomething, exProto.anotherThing);*/

function Tree(name) {
    this.name = name;
}

var theTree = new Tree('Redwood');
console.log('theTree.constructor is ' + theTree.constructor);

//export exProto;

var orgChart = {
    name: 'Micheal', subordinates: [

    ]
}