//swtich

/* const month =4

switch (month) {
    case 1: 
        console.log("Jan")
        break;
    case 2: 
        console.log("feb")
        break;
    case 3: 
        console.log("march")
        break;
    case 4: 
        console.log("april")
        break;  // if break is not written then it will be printed everything after that except default
    case 5: 
        console.log("may")
        break;
        
        

    default: Nothing
        break;
}
*/  

// === checks the type also along with the values 


// truthy and falsy 

// falsy values 

// false, 0, -0, BigInt, 0n , "", null, undefined, NaN

// truthy values

// "0" , 'false' , " ", [] , {} , function(){} ,

const userEmail = "aditya@gmail.com";

if(userEmail.length===0){
    console.log("Array si empty")
}

// Nullish Caolescing Operator (??): null undefined

let val1;
// val1 = 5??10 // 5
// val1 = null??10 // 10
// val1 = undefined?? 15 // 15
val1 = null ??10??20 // 10

// console.log(val1);

// Ternary operator

// condition ? true : false 

// const stockPrice = 199
// stockPrice <= 100 ? console.log("less than 100") : console.log("more than 100")