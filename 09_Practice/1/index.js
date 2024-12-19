const cars = {
    "Toyota Camry": {
        name: "Toyota Camry",
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 203,
    },
    "Honda Civic": {
        name: "Honda Civic",
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 158,
    },
    "Ford Mustang": {
        name: "Ford Mustang",
        wheels: 4,
        doors: 2,
        isStarted: false,
        hp: 310,
    },
    "Tesla Model 3": {
        name: "Tesla Model 3",
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 283,
    },
    "BMW X5": {
        name: "BMW X5",
        wheels: 4,
        doors: 5,
        isStarted: false,
        hp: 335,
    }
};


function getCar(carName) {
    if (cars.hasOwnProperty(carName)) {
        return cars[carName];
    } else {
        console.log(`Автомобиль "${carName}" не найден.`);
        return "Автомбиль не найден";
    }
}

// Примеры использования:
let carName = "Toyota Camry";
let foundCar = getCar(carName);
if (foundCar) {
  console.log(foundCar);
}

carName = "Tesla Model S";
foundCar = getCar(carName);
if (foundCar) {
  console.log(foundCar);
}