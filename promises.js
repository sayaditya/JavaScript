const promiseOne = new Promise(function(resolve,reject){
    // Do async task
    // DB calls , cryptography , network
    setTimeout(function(){
    console.log('Async task is complete');
    resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
    console.log('Async task 2');
    resolve()
    },1000)
}).then(function(){
    console.log('Promise consumed again')
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"sayaditya",email:"aditya@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
    let error = false
    if (!error){
    resolve({username:"Sayaditya", pass:"123"})
    }else{
        reject('Error: something went wrong')
    }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error)
}).finally(()=>console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve,reject){
     setTimeout(function(){

    let error = ture //imp 
    if (!error){
    resolve({username:"Js", pass:"123"})
    }else{
        reject('Error: Js went wrong')
    }
    },1000)
})

async function consumePromiseFive(){
    try {
    const response = await promiseFive
    console.log(response);
    } catch(error){
    console.log(error);
    }
}

consumePromiseFive()

