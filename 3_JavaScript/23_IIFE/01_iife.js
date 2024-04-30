// Immediately Invoked Function Expressions (IIFE)

(function chai()
{
    // named iife
    console.log(`DB CONNECTED`);
    // here semicolon is important as it doesn't know that the function is terminated.
})();

// syntax of iife
// first parenthesis contains function definition,
// second parenthesis is the execution call.

( function aurcode(){
    console.log(`DB CONNECTED TWO`);
}) ();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('Shivam')