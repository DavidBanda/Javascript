const car = {
    color: 'Red',
    'la marca': 'Ford',
    getProperties: function() {
        return `Color: ${this.color}, Marca: ${this["la marca"]}`
    }
}

// delete car['el color']
// console.log(car)

console.log(car.color)
console.log(car["la marca"])
console.log(car.getProperties())

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        return `Hey there! My name is ${this.name} and I'm ${this.age}`
    }
}

const david = new Person('David', 24)
console.log(david.hello())