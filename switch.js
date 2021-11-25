var number = 1;

switch (number) {
    case 1:
        console.log("I'm an one!");
        break;
    case 10:
        console.log("I'm a ten!");
        break;
    case 100:
        console.log("I'm an one hundred");
        break;
    default:
        console.log("I'm nothing");
};

//Homework Rock Paper Scissors Game using switch

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

switch (game) {
    case 5:
        console.log("scissors wins");
        break;
    case 4:
        console.log("rock wins");
        break;
    case 3:
        console.log("paper wins");
        break;
    default:
        console.log("Nothing");
}