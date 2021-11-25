console.log(myName);
var myName = "Pony";

var myFFlower = undefined;
console.log(myFFlower + " I'm that hoisting");
myFFlower = "Orchid";


hey();
function hey() {
    console.log("Hi " + myName);
};