class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    sayHello(){
        console.log("Hello, my name is " + this.firstname + " "+ this.lastname);
    }
}

let object1 = new Person("Matthew", "Hons")
object1.sayHello();