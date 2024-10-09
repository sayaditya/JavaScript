// for each koi bhi value return nhi karta 

/* const coding  = ["js", "Cpp", "Java","Python"];

const values = coding.forEach((item)=>{
    console.log(item);
    return;
})

console.log(values);

*/


// in filter there is a condition inside a callback function 
const myNum = [1,2,3,4,5,6,7,8,9,10];
const newNum = myNum.filter((num) => num>5)  // also condition can be put inside the curly braces there,
// console.log(newNum);                                           // we have to return it first { return num > 4}


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})

//   console.log(userBooks);


// using map to add numbers in an array to every Element

const myarr = [1,2,3,4,5,6,7,8,9,10]

// chaining 

const myNewarr = myarr
                  .map((num) => num * 10)
                  .map((num) => num + 1)
                  .filter((num) => num >=40)
                  


// const myNewarr = myarr.map((num) => {return num  + 10})
// console.log(myNewarr);


// reduce method 

const num1 = [5,2,3]

/*const total = num1.reduce(function(acc,currval){
  console.log(`acc: ${acc} and curr val : ${currval}`);
  return acc + currval
},1)

*/

// with the help of callback function

const total = num1.reduce((acc,curr) => acc+curr , 1)

console.log(total);

const shoppingCart = [
  {
    itemName: "toothpaste",
    price: 10
  },
  {
    itemName: "soap",
    price: 15
  },
  {
    itemName: "bread",
    price: 50
  },
  {
    itemName: "peanut",
    price: 34
  }
  
]

const priceToPay = shoppingCart.reduce((acc,item) => acc+item.price,0 )

console.log(priceToPay);



