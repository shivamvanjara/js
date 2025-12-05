//object literals
const mark=Symbol(147)
const user={
    name:"shivam",
    email:"shivam@123",
    age:18,
    location:"rajkot",
    "hobby":"cricket",
    [mark]:149
}
console.log(user.age);
console.log(user["hobby"]);
console.log(user[mark]);
user.email="shiva@123"//override actual value
//Object.freeze(user)//restrict to change value of the freeze object
//user.age=15//not overide
//console.log(user.age);//return 18 
user.f1=function()
{
    return "hello user,";
    
}
user.f2=function()
{
    return `hello user, ${this.name}`;
}
console.log(user.f1());
console.log(user.f2());
console.log(user.f1);//not execute function , only return reference of function

