const user = {
    username: "aditya",
    price: 999,
    welcomeMessage: function(){
        console.log( `${this.username} , welcome to the website`); 
        console.log(this) // we can only use this function inside an object only 
    }
}

// user.welcomeMessage()
// user.username = "adi";
// user.welcomeMessage()

// console.log(this)

// function one (){
//     let username = "aditya";
//     console.log(this.username); // here this function will rsult to undefined value 
// }
// one()

// const one = function(){
//     let username = "aditya";
//     console.log(this.username);
// }
// one()

const one = () => {   // this is called arrow function
    let username = "aditya";
    console.log(this.username);
}
// one()

// arrow function

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// console.log(addTwo(5,9))

// if we are using parenthesis () we will not be using return keyword but in the curly braces {} we will be using return keyword
// const addTwo = (num1,num2) =>  (num1+num2) // implicit return method 
// console.log(addTwo(5,9));

// explicit return
const addTwo = (num1,num2) => ({username:"aditya"})
console.log(addTwo())







