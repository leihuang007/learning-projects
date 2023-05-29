// students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalc = function name(score, totalScore) {
    let my_score = score / totalScore * 100
    let result = 'F'
    if (my_score <= 100 && my_score >= 90) {
        result = 'A'
    } else if (my_score < 90 && my_score >= 80) {
        result = 'B'
    } else if (my_score < 80 && my_score >= 70) {
        result = 'C'
    } else if (my_score < 70 && my_score >= 60) {
        result = 'D'
    } else if (my_score < 60) {
        result = 'F'
    }
    return result
}

let result = gradeCalc(90, 100)
console.log(result)