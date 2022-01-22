const numbers = [1, 2, 3, 4, 5, 6]

const greaterThanZero = el => el > 0
const greaterThanten = el => el > 10
const even = el => el % 2 === 0

console.log(numbers.filter(el => el > 0))
console.log(numbers.filter(greaterThanZero))
console.log(numbers.filter(greaterThanten))
console.log(numbers.filter(even))

const students = [
    { nume: 'Jake', score: 6.4},
    { nume: 'Susan', score: 8.6},
    { nume: 'Emma', score: 9.4},
    { nume: 'Peter', score: 9.1},
]

const greatstudent = student => student.score >= 9

console.log(students.filter(greatstudent))
console.log(students)
