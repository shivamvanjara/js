const isUserloggedIn = true
const temperature = 41

if (temperature === 40) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

console.log("Execute");

// Comparison Operators: <, >, <=, >=, ==, !=, ===, !==

const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`); // NOTE: This will throw an error because 'power' is block-scoped.


const balance = 1000

// Implicit scope (short-hand)
if (balance > 500) console.log("test"), console.log("test2");

// Nesting check
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// Logical AND (&&) - All must be true. (Note: 2==3 is false, so this block won't run)
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

// Logical OR (||) - Only one needs to be true
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

// "0", 'false', " ", [], {}, function(){}
let a=[]
if(a.length===0){
    console.log("array is empty");
}
let b={}
if(Object.keys(b).length===0){
    console.log("object is empty");
}
let val1;
val1=5??10; //nullish coalescing operator
console.log(val1);
// Output: 5
val1=null??10;
console.log(val1);
// Output: 10
// Use Cases:
// 1. Default Values: Assign default values to variables when dealing with potentially null or undefined data.
// 2. Function Parameters: Provide default values for function parameters that might not be passed.
// 3. Configuration Settings: Set default configuration options in applications when user preferences are not provided.
const value=100;
value<=100?console.log("value is less than or equal to 100"):console.log("value is greater than 100");

// Ternary Operator
// condition ? expressionIfTrue : expressionIfFalse 