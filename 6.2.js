class person{
    constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    }

    sayHello(){
    console.log(`Hello ${this.firstname} ${this.lastname}.`);
    }

}

sam = new person("sam", "gamegie");

console.log(sam.sayHello());