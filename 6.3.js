class Animal {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
}

class Cat extends Animal { // Extends => Take all method of animal
    constructor(name){
        super(name);// Super => Constructor of Parent -> Animal 
    }
    static greeting = "Miaouwww"; // Take greeting of sayHello() => Class Animal | Static is a method, he can't be outside a class and in a object but in a object class, Yep !
}

class Dog extends Animal { 
    constructor(name){
        super(name); 
    }
    static greeting = "Waf waf";
}

const catOne = new Cat("Linux");
const dogOne = new Dog("Windows");

console.log(catOne.sayHello());
console.log(dogOne.sayHello());