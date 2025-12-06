// --- 1. Basic For Loop ---
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}

// console.log(element); // ERROR: 'element' is not defined outside the loop scope.

// --- 2. Nested Loops (Multiplication Table) ---
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`); 
    console.log(i + '*' + j + ' = ' + i*j );
   }
}

// --- 3. Looping through Arrays ---
let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


// --- 4. Break and Continue ---

// BREAK: Stops the loop completely when the condition is met.
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break // Exits the loop immediately
    }
    console.log(`Value of i is ${index}`);
}

// CONTINUE: Skips ONLY the current iteration and keeps going.
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue // Skips printing 5, but moves to 6
    }
   console.log(`Value of i is ${index}`);
}

// --- 5. Looping through Objects ---
let myObject = {
    name: "Bruce Wayne",
    age: 35,
    city: "Gotham"
};

// Using for...in to loop through object properties
for (let key in myObject) {
    console.log(`Key: ${key}, Value: ${myObject[key]}`);
}

// --- 6. While Loop ---
let count = 1;
while (count <= 5) {
    console.log(`Count is: ${count}`);
    count++;
}

// --- 7. Do...While Loop ---
let num = 1;
do {
    console.log(`Number is: ${num}`);
    num++;
} while (num <= 5);


// --- 8. For...of Loop (for arrays and iterable objects) ---
let heroes = ["Ironman", "Thor", "Hulk"];
for (let hero of heroes) {
    console.log(`Hero: ${hero}`);
} 
// Note: for...of cannot be used directly on objects. Use for...in or Object methods instead.


// --- 9. forEach Method (Array specific) ---
heroes.forEach(function(hero, index) {
    console.log(`Hero at index ${index} is ${hero}`);
});

heroes.forEach ((hero, index) => {
    console.log(`(Arrow) Hero at index ${index} is ${hero}`);
})

//map
const map=new Map();
map.set("name","shivam");
map.set("age",24);
console.log(map);
for (const [element,value] of map) {
    console.log(element,':',value);
    
}


const code = [
    {
        name: "javascript",
        extension: ".js"
    },
    {
        name: "python",
        extension: ".py"
    },
    {
        name: "java",
        extension: ".java"
    }
]

code.forEach( (element) => {
    console.log(element.name, element.extension);
} )
//for each is not allow to return the value 