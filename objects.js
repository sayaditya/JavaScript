// constructor
    // singelton

    
//literals

// const mySym = Symbol("mykey1"); // imp wrt interview perspective

// const newUser = {
//     name: "Aditya",
//     "full name": "Aditya Patel",
//     [mySym]: "mykey1", 
//     age: 20,
//     email: "aditya@gmail.com",
//     location:"Gorakhpur",
//     isLoggedIn: false,
//     lastLoggedInDays:["Monday","Friday"]

// }


// console.log(newUser.name); // normal method to check objects
// console.log(newUser["name"]); // new way to check objects
// console.log(newUser["full name"]);
// console.log(newUser[mySym]); // way to use symbol 
// console.log(newUser["email"]);


//Object.freeze(newUser); // to freeze the value so that it can't be changed further
// newUser.email = "aditya@microsoft.com"; // to change the vaue of any given variabless
// console.log(newUser);

// newUser.greeting = function(){
//     console.log("Hello User");
// }
// newUser.greetingTwo = function(){
//     console.log(`Hello user,${this.name}`);
// }
// console.log(newUser.greeting());
// console.log(newUser.greetingTwo());

// constructors

const tinderUser = {}
tinderUser.id = "123d";
tinderUser.name = "Sexa";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    name:{
        fullname:{
            firstname: "San",
            lastname: "Kalra"

        }
    }
}

// console.log(regularUser.name.fullname.lastname)

// merging two objects 

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};
// const obj3 ={obj1, obj2}; // this is not that method

// const obj3 = Object.assign({},obj1,obj2) // this is the right method to merge objects but not use widely

const obj3 = {...obj1,...obj2} // this is the spread operator used to merge the objects which is used widely
// console.log(obj3); 


// accessing data from the user in the database 

const users = [
    {
        id: 1,
        email: "aditya@gmail.com"
    },
    {
        id: 2,
        email: "adity@gmail.com"
    },
    {
        id: 3,
        email: "adit@gmail.com"
    },
    {
        id: 4,
        email: "adi@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// Object de- structure

const course ={
    courseName: "Js",
    Instructor: "hitesh",
    price: 999,
}

// course.Instructor; it can also be used 

const {price} = course
// console.log(price);

// json 

// {
//     "courseName": "Js",
//     "Instructor": "hitesh",
//     "price": 999,
// }








