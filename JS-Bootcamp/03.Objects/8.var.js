var firstName = 'Andrew'
// like let, you can reassign a var variable
firstName = 'Mike'

// However, you can also redeclare a variable
var firstName = 63

// var is function scoped not block scoped.
if (10 === 10) {
    var tempName = 'Jen'
}
console.log(tempName)
let tempFunction = function(){
    var inFunctionVar = 'hello'
    console.log(inFunctionVar)
}

// You can also access a var variable before it is defined.
console.log(varAge)
var varAge

console.log(letAge)
let letAge