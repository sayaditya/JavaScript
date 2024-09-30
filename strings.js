// const name = "aditya";
// const repoCount = 5;

// // console.log(name+repoCount+" Value "); //this is outdated
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// numbers

// const score = 400;
// console.log(score);

// const balance = new Number(100);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // majority time we use this in the ecommerce website to fix the price
// const otherNumber = 999.894;
// console.log(otherNumber.toPrecision(4));
// const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'));

// maths

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(4.7));
// console.log(Math.ceil(8.1));
// console.log(Math.floor(8.9));
// console.log(Math.min(5,4,2,9));
// console.log(Math.max(7,3,9,1));

// console.log(Math.random());
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10)+1);

// const min = 20;
// const max = 40;
// console.log(Math.floor(Math.random()*(max-min+1))+min);

// Date & time

// let myDate = new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate); // it's an object -- may ask in interview

// methods to represent date and time 

// let newCreatedDate = new Date(2024,9,30);
// let newCreatedDate = new Date(2024,9,30,10,5,6);
// let newCreatedDate = new Date("2024-01-30");
let newCreatedDate = new Date("08-30-2024");



// console.log(newCreatedDate.toLocaleString());

// if we need to get the dates with time and all the functions required

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(newCreatedDate.getTime());
// console.log(Date.now());

// console.log(Math.floor(Date.now()/1000)); // asked in interview that to convert it into seconds --this is done by this method

// if there is needed only basic date year and day 
let myDate = new Date();
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getFullYear());

// to get more customisation in localestring

myDate.toLocaleString('default',{
    weekday:"long",
    day:"numeric",
    hour:myTimeStamp

})

