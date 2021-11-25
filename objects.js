var myCar = {
    brand: "Toyota",
    model: "Corolla",
    year: 2021
};


var myNewCar = {
    brand: "Toyota",
    model: "Corolla",
    year: 2021,
    detail: function () {
        console.log(`Car ${this.model} ${this.year}`) //"this"references to the object
    }
};


//Cosntructor Function
function car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

var newCar = new car("Tesla", "Model 3", 2021);

var newCar2 = new car("Susuki", "Swift", 2021);

var newCar3 = new car("Toyota", "Corolla", 2020);

//Homework

var brands = ['Toyota', 'Mazda', 'Renault']
var cars = []

function Car(brand, model, year) {
    this.brand = brand
    this.model = model
    this.year = year
}

for (var i = 0; i < 30; i++)
    cars.push(new Car(brands[Math.floor(i / 10)], `Serie ${i % 10}`, 1999 + i % 10))

console.log(cars)