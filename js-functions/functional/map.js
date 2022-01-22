const numbers = [1, 2, 3, 4, 5, 6]
const numbersV2 = numbers.map(el => el * 2)

console.log(numbers, numbersV2,)

const students = [
    { nume: 'Jake', score: 6.4},
    { nume: 'Susan', score: 8.6},
    { nume: 'Emma', score: 9.4},
    { nume: 'Peter', score: 9.1},
]

const getScore = el => el.score

const result = students
     .map(getScore)
     .map(Math.ceil)

console.log(students, result)