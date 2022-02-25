let array = [1,2,3,4,5,0,55,44,3]

console.log(Math.min(...array))
console.log(Math.max(...array))


//other methode

function min(arr){
  min = arr[0]
  arr.forEach((item, i) => {
    if(item<min)
      min=item
  });
  return min
}
function max(arr){
  max = arr[0]
  arr.forEach((item, i) => {
    if(item>max)
      max = item
  });
  return max
}

console.log(min(array))
console.log(max(array))
