// Global
  // Local
    // Local (name)
  // Local

// let name = 'Andrew'

if (true) {
    // let name = 'Mike'

    if (true) {
        // Global leak. A local scope variable will be created in the global scope.
        // Always use let to define a variable.
        name = 'Jen' 
        console.log(name)
    }
}

if (true) {
    console.log(name)
}