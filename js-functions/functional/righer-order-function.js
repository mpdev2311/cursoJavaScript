/*
functions that operate on other functions,
* either by taking them as arguments or by 
* returning them, are called higher-order functions.
*/

function rum(fn) {
return `Result: ${fn()}`
}

function sayHello() {
    console.log('Hello!!')    
}

rum(sayHello)

rum(function() {
    console.log('rum!!!')
})

const result = rum(Math.random)
console.log(result)