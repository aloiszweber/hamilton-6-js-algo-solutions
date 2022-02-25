class Animal {
    constructor(name){
        this.name = name
    }
    sayHello() {
        return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
}
//child of class Animal
class Cat extends Animal {
    constructor(name, age){
        super(name)
        this.age = age
    }
   
        static greeting ='Miaou'
}
//child of class Animal
class Dog extends Animal{
        static greeting ='ouaf'    
}

    const cat1 = new Cat("Billy", 3);
    const dog1 = new Dog("Rex")

    console.log(cat1.sayHello())
    console.log(dog1.sayHello())
   