// for of 

let arr = [1,2,3,4,5];

for (const val of arr) {
    // console.log(val);
}

const greeting = "Good Morning";

for (const greet of greeting) {
    // console.log(`Enter each character seperately:${greet}`);
}

// map 

const map = new Map()

map.set("IN","India")
map.set("Fr","France")
map.set("Ned","Nederland")
map.set("NZ","NewZealand")

// console.log(map);

for (const [key,val] of map) {
    // console.log(key, "=>" , val);   // to destructure every value out from the array 
}

// objects are not iteratable by for of loops 

// so we iterate it with the help of for in loop 

const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "ruby"

}

// console.log(myObject); 
// we use for in to iterate objects

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for in for arrays 

const lang = ["js","cpp","java"];

for (const key in lang) {
//    console.log(lang[key]);   
}

const code = ["js","cpp","java"];


// call back 

code.forEach(function (val){
    // console.log(val);
})

// we can also use arrow function for this task 

code.forEach( (val)=>{
    // console.log(val);
})

// also we can decalre a seperate funcion and acces that seperately 

function printMe(item){
    console.log(item);
}
// code.forEach(printMe);


// we can also access indexing array and items also 

code.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

// objects inside arrays 

// accessing values from arrays with the help of callback functions
// will be using mostly in databse 

const mycoding = [
    {
        langName: "Javascript",
        langfile: "Js"
    },
    {
        langName: "C Plus Plus",
        langfile: "cpp"
    },
    {
        langName: "Ruby",
        langfile: "rb"
    },
    {
        langName: "Python",
        langfile: "py"
    },

]

mycoding.forEach((item)=>{
    console.log(item.lang);
})


