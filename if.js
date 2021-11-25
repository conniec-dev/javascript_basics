var age = 18;

if (age === 18) {
    console.log("You can vote! It will be your first vote")
} else if (age > 18) {
    console.log("You can vote again!");
} else {
    console.log("You can't vote yet")
}


var number = 1;

var result = number === 2 ? "I'm a 1" : "Nop, I'm not a 1";


if (true) {
    console.log("Hello")
} else {
    ("I'm false")
};

//Homework - Rock Paper Scissors Game

var rock = 1;
var paper = 2;
var scissors = 3;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function playGame(element1) {
    minNum = rock
    maxNum = scissors + 1
    element2 = getRandomInt(minNum, maxNum)
    result = element1 + element2
    if (element1 === element2) {
        getRandomInt(minNum, maxNum)
    }
    result = element1 + element2
    return result
};

game = playGame(rock, scissors)

if (game === 5) {
    console.log("scissors wins")
} else if (game === 4) {
    console.log("rock wins")
} else {
    console.log("paper wins")
}