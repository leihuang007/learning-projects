// Multiple arguments
let add = function (a, b) {
    return a + b
}

let result = add(10, 1)
console.log(result)

// Default arguments
let getScoreText = function (name = 'Jone Doe', score = 0) {
    return `Name: ${name} - Score: ${score}`
    // return "Name: " + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge area
let tipCalculator = function (total = 0, tipPercent = 0.0) {
    return total * (1 + tipPercent)
}
total_pay = tipCalculator(100, .3)
console.log(total_pay)