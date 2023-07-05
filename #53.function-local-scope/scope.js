function myLocalScope() {
    // Only change code below this line
    const myVar = "merril";
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
console.log('outside myLocalScope', myVar);
//it will print nothing because variable myVar is defined in the function.