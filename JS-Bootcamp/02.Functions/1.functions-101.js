// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

let square_v1 = function (num) {
    let result = num * num
    console.log(result)
}

let square_v2 = function (num) {
    let result = num * num
    return result
}

let my_square = square_v2(16)
console.log(my_square)

// Challenge Area
// convertFahrenheitToCelsius

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

my_celsius = convertFahrenheitToCelsius(32)
console.log(my_celsius)