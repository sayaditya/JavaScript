// scopes 

if (true){
    let a = 3;
    const b = 4;
    var c = 5;
}
// console.log(a)
// console.log(b)
console.log(c)


// just two methods 

addOne(5) // we can easily access before initialisation 
function addOne(num){
    return num+1
}
// console.log(addOne(5))

// addTwo(5)// here we can't acces it before the initialisation
const addTwo = function(num){
    return num + 2
}