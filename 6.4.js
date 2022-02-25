class Person{
  constructor(firstname,lastname){
    this.lastname = lastname;
    this.firstname= firstname;
  }
  get Name(){
    return  this.firstname +" "+ this.lastname;
  }
  set Name(Fullname){
    let array = Fullname.split(" ");
    this.firstname = array[0];
    this.lastname = array[1];
  }
}

MyPerson = new Person("Raphael","Kezzou");
console.log(MyPerson.Name);
MyPerson.Name="Philippe Offermans";
console.log(MyPerson.Name);