const students = [
    { nume: 'Jake', score: 6.4},
    { nume: 'Susan', score: 8.6},
    { nume: 'Emma', score: 9.4},
    { nume: 'Peter', score: 9.1},
]

const greatstudent = student => student.score >= 9
const getScore = el => el.score
const avg = (acc, el, i, array) => {
    if(i === array.length - 1) {
        return (acc + el) / array.length
    } else {
        return acc + el
    }
}

console.log(
       students
       .filter(greatstudent)
       .map(getScore)    
       .reduce(avg)


)