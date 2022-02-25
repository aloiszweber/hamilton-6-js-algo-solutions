const readlineSync = require("readline-sync");
let myobject = {
    Name : "Robert",
    ProductionYear : 42,
    namesCastMembers : []
};
function askTvSerie(){
    myobject.Name =readlineSync.question('Give me a name ')
    myobject.ProductionYear = readlineSync.question('Give me the production year ')
    let namesCast
    while ((namesCast = readlineSync.question('enter the cast members (n to stop)')) != 'n')
        myobject.namesCastMembers.push(namesCast)
}
askTvSerie()
console.log(JSON.stringify(myobject))
