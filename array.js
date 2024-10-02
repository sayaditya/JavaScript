//  array

 // const myArr = [0,1,2,3,4,5]; // basic method to declare an array
// const veg = ["lauki","tinde","mirch"];

// const myArr2 = new Array(1,2,3,4) // new way to declare an array
// console.log(myArr[2]);
// console.log(myArr2[0]);

// array methods

// myArr.push(6)
// myArr.push(8)
// myArr.pop()
// myArr.unshift(5)
// myArr.shift()
// console.log(myArr);
// console.log(myArr.includes(3))

// const newArr = myArr.join() //converts array into strings
// console.log(myArr);
// console.log(typeof newArr);

// slice , splice

// console.log("A ",myArr);

// const myn1 = myArr.slice(1,4) // slices a specific part of that array but does not include the last element
// console.log(myn1);

// console.log("B ",myArr);

// const myn2 = myArr.splice(1,4); //does the same work as slice but it does include the last element && and a portion of that array is being sliced
// console.log("C ", myArr);
// console.log(myn2);


// concatenation in Array

// const marvel_heros = ["Captain America", "Thor","Ironman","Spider Man"];
// const dc_heros = ["Super Man", "Batman","Flash"]

// const all_heros = marvel_heros.concat(dc_heros); // first method to concatenate 
// console.log(all_heros);

// const all_new_heros = [...marvel_heros,...dc_heros]; // new method to concatenate--> it's called spread
// console.log(all_new_heros);

// const another_array = [1,2,3,4,[5,6,7],[8,9,10,[11,12]]]
// const real_another_array = another_array.flat(Infinity); // flat() concatenates all the sub array elements 
// console.log(real_another_array);

// To convert any string into array 

// console.log(Array.isArray("Aditya"));
// console.log(Array.from("Aditya"));
// console.log(Array.from({name:"Aditya"}));

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// let score4 = 400;

// console.log(Array.of(score1,score2,score3,score4));






