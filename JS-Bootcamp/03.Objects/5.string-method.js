let my_name = 'Andrew Mead'

// length property
console.log(my_name.length)

// convert to upper case
console.log(my_name.toUpperCase())

// Document: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// convert to lower case
console.log(my_name.toLowerCase())

// includes method
let password = 'abc123password098'
let word = 'password'
console.log(`Password "${password}" ${password.includes(word) ? 'has' : "doesn't have"} "${word}" in it." `)

// trim method
let hello_world = "    Hello World!"
console.log(hello_world)
console.log(hello_world.trim())


// Challenge area
// isValidPassword
// length is more than 8 - and it doesn't contain the word password
let isValidPassword = function (password) {
    if (password == undefined) {
        return false
    } else if (password.trim().length <= 8) {
        return false
    } else if (password.includes('password')) {
        return false
    }
    return true
}

let isValidPassword2 = function (password) {
    return password != undefined && password.trim().length > 8 && !password.includes('password')
}

console.log(isValidPassword2('    12345'))