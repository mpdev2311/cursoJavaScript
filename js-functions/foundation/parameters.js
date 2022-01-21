
function logParams(a, b, c) {
    console.log(a, b, c)
}

logParams(1, 2, 3, 4, 5)
logParams(1, 2, 3)
logParams(1, 2)
logParams(1)
logParams()

function defaullParams(a = 1, b = 2, c = 3) {
    console.log(a, b, c)
}

defaullParams(7, 8, 9)
defaullParams(7, 8,)
defaullParams(7)
defaullParams()

console.log(1)
console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// spread/rest
function logNums(...nums) {
    console.log(nums)     
}

logNums(1, 2, 3, 4, 5, 6)

function sumAll(...nums) {
    let total = 0 
    for(let n of nums) {
        total += n
    }
    return total
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
