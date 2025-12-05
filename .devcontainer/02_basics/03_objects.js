//single turn object
const user=new Object()
user.id=123
user.age=18
user.isLoggedin=false
console.log(user);
user.name={
    fname:"shivam",
    lname:"vanjara"
}
console.log(user.name)
console.log(user.name.fname);
const obj1={fname:"rajesh",lname:"tanna"}
const obj2={fname1:"shivam",lname1:"vanjara"}
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3);
const info=[
    
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "xyz@gmail.com"
    },
    {
        id: 3,
        email: "pqr@gmail.com"
    },
    
]
console.log(info);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));// return each key and value in seperate arrays
console.log(user.hasOwnProperty('isLoggedin'));
 
const course={
    name:"maths",
    credit:5,
    total_mark:100
}
const {total_mark:mark}=course
console.log(mark);
