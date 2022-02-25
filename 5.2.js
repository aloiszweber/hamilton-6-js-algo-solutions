const readlineSync = require("readline-sync");
let array_cast_randomized=[]
let j = 0
let myobject = {
    Name : "Robert",
    ProductionYear : 42,
    namesCastMembers : []
};

function randomizeCast(tvSerie){
j=0
  while(myobject.namesCastMembers.length>0) {
    j= Math.floor(Math.random() * myobject.namesCastMembers.length)
    array_cast_randomized.push(myobject.namesCastMembers[j])
    myobject.namesCastMembers.splice(j,1)
  }
  array_cast_randomized.forEach((item, i) => {
    myobject.namesCastMembers.push(item)
  })
}

function askTvSerie(){
    myobject.Name =readlineSync.question('Give me a name ')
    myobject.ProductionYear = readlineSync.question('Give me the production year ')
    let namesCast
    while ((namesCast = readlineSync.question('enter the cast members (n to stop)')) != 'n')
        myobject.namesCastMembers.push(namesCast)
}
askTvSerie()
console.log(myobject)
randomizeCast(myobject)
console.log(myobject)
