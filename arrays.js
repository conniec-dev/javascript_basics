var fruits = ["pineapple", "strawberry", "watermelon", "apple"];

var moreFruits = fruits.push("grapes");

["orange", "raspberry", "mango", "kiwi"]

//methods: push, pop, unshift, shift, indexOf


//For Loop
//Greeting students
var students = ["Mary", "Kristen", "Daniel"];

function greetStudents(student) {
    console.log(`Hi ${student}`);
}

//First form of for
for (var i = 0; i < students.length; i++) {
    greetStudents(students[i]);
}

//Second form of for
for (var student of students) {
    greetStudents(student);
}

//While Loop
var students = ["Mary", "Kristen", "Daniel"];

function greetStudents(student) {
    console.log(`Hi ${student}`);
}

while (students.length > 0) {
    console.log(students)
    var student = students.shift();
    greetStudents(student);
}

//Methods

var items = [
    { name: "bicycle", price: 3000 },
    { name: "Tv", price: 2500 },
    { name: "Book", price: 320 },
    { name: "Cellphone", price: 10000 },
    { name: "Laptop", price: 20000 },
    { name: "Keyboard", price: 500 },
    { name: "Earbuds", price: 1700 },
];

var itemsFiltered = items.filter(function (item) {
    return item.price <= 500
});

var itemsName = items.map(function (item) {
    return item.name
});

var itemsFinder = items.find(function (item) {
    return item.name === "Laptop"
});

items.forEach(function (item) {
    console.log(item.name);
});

var cheapItems = items.some(function (item) {
    return item.price <= 700;
});