// if
const isUserloggedIn = true;

if(isUserloggedIn)
{

}

// comparison operators
// <,>,<=,>=,==,!=,===

// == checks the equality
// === it checks type and equality simultaneously.

// here 2 (number) is not equal to "2" (string) but inside if it is evaluated as true.
// that's why we'll use === (strict equal) which does type checking as well.
if(2 == "2")
{
    console.log("executed")
}

if(2 === "2")
{
    console.log("executed")
}
