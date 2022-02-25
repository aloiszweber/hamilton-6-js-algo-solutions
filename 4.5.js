/* function calcDistance(A, B) */

const readlineSync = require("readline-sync");

function calcDistance (pt1,pt2)
{
	let dist = 0;
	dist = Math.sqrt( Math.pow ((pt2Arr [1] - pt1Arr [1]), 2)+Math.pow((pt2Arr [0] - pt1Arr[0] ), 2));	
	return dist;
}
let pt1Arr = [];
let pt2Arr = [];

pt1Arr[0] = parseInt(readlineSync.question("Entrez la coordonnee X pour le 1er point :"));
pt1Arr [1]= parseInt(readlineSync.question("Entrez la coordonnee Y pour le 1er point :"));
pt2Arr [0]= parseInt(readlineSync.question("Entrez la coordonnee X pour le 2eme point :"));
pt2Arr [1]= parseInt(readlineSync.question("Entrez la coordonnee Y pour le 2eme point :"));
console.log(pt1Arr);
console.log(pt2Arr);
console.log(calcDistance(pt1Arr,pt2Arr));








