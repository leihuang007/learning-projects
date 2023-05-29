// Lexical Scope (Static Scope)
// Global Scope - Defined outside of all code blocks
// Local Scope - Defined inside a code block.

let varOne = 'varOne'
if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)
}

// Uncaught ReferenceError ReferenceError: varTwo is not defined
console.log(varTwo)