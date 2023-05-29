// undefined for variables
let name
if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}
// console.log(name)

// underfined for function arguments
let square = function(num){
    console.log(num)
}

square()
// undefined as function return default value
let result = square()
console.log(result)

// null needs to be assigned to a variable manually
// so when we see null, we know it's assigned on purpose.
let age = 27
console.log("age: " + age)
age = null
console.log("age: " + age)