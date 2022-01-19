//  Anonymous function
(function (a, b, c) {
    return a + b + c
})

// function expression
const sum = function (a, b) {
    return a + b
}

const result = sum(7, 59)
console.log(result)

const anotherSun = sum 
console.log(anotherSun(5, 9))

let x = 3
console.log(x)

x = sum
console.log(x(11, 16))