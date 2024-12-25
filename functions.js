// functions

function myName(name){
    console.log(name)
}
myName("Aditya") 


// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
    

// }

// addTwoNumbers(4,5) 

// const result = addTwoNumbers(4,5)
// console.log(result)

function addTwoNumbers(number1,number2){
    let result = number1+number2
    return result 

}
const result = addTwoNumbers(4,5) // if we are using return then we can only store that in any variables otw not
// console.log(result)

function loginUserMessage(username){
    if(!username){
        console.log("Please enter your username")
        return
    }
    return `${username} "just logged in"`
}
// console.log(loginUserMessage("aditya"))
// console.log(loginUserMessage("aditya"))  // if we don't pass any value it will return to undefined 

// cart price calculator

// function cartPriceCalculator(...num1){      // here ... is the rest operator used to add the arguments in a single array
//     return num1
// }
// console.log(cartPriceCalculator(499,699,999))


function cartPriceCalculator(val1, val2,...num1){      // here ... wali value bas bache hue values me jayegi val1 aur val2 ka apna alag hai
    return num1
}
// console.log(cartPriceCalculator(499,699,999,1199))

// handling object with functions

const user = {
    username: "aditya",
    price: 999

}

function handleObject (anyObject){
    console.log(`"User name is ": ${anyObject.username},"and the price is": ${anyObject.price}`)
}

// handleObject(user)

// we can also pass the value directly 
handleObject({
    username: "Aditya",
    price: 999
})

