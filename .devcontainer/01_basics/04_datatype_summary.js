// =,==,===

    let x = 10; // Assigns the value 10 to the variable x
    let name = "shivam"; // Assigns the string "shivam" to the variable name

    console.log(5 == "5"); // true (number 5 is coerced to string "5" before comparison)
    console.log(0 == false); // true (0 is coerced to false)
    console.log(null == undefined); // true

    console.log(5 === "5"); // false (number 5 is not strictly equal to string "5")
    console.log(0 === false); // false (number 0 is not strictly equal to boolean false)
    console.log(null === undefined); // false
    console.log(5 === 5); // true

//  primitive
// types : string, number, boolean, null, undefine, symbol, bigint
// store in stack  
// share only copy

// non primitive (reference)
// types : arrays, objects, functions
// stote in heep
// share reference

// array
    const city =["ahmedabad","rajkot","mumbai"];

//object : use { }
let my_info=
   {
        name:"shivam",
        age:18,
    
    }


//symbol : used for define unique 
    const sym1 = Symbol("description");
    const sym2 = Symbol("description");
    console.log(sym1 === sym2); // false

const f1 = function(){
   return "hello"
    
}

console.log(f1());

function greet(name1) {
    return "Hello, " + name1 + "!";
}

// Function call and using the returned value
let message = greet("shivam");
console.log(message); // Output: Hello, shivam!