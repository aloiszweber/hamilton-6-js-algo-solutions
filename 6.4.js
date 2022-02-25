const readlineSync = require("readline-sync");
class Person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get name(){
        return `Hello I'm ${this.firstname} ${this.lastname}`;
    }
    set name(val){
        this.firstname = val.split(" ")[0];
        this.lastname = val.split(" ")[1];
    }
}

let matt = new Person("Matthew","Hons");

console.log(matt.name);

matt.name = "Matt Potter";
console.log(matt.name);