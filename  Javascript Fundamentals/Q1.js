function outerFunction(outerParameter) {
    let outerVariable = "A variable declared in outerFunction   "

    // Inner function definition

    function innerFunction() {
        console.log("outer parameter: " + outerParameter);
        console.log("outer variable: "+ outerVariable);

    }

    // Returning the inner function
    return innerFunction
}

// creating an instance of outerFunction
let myFunction = outerFunction("I am an outer parameter");

// calling the inner function through the returned function refrence

myFunction();