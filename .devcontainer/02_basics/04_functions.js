const name="shivam";
function user()
{
    console.log(`hello,${name}`);   
}
user()

function sum(n1,n2)
{
    if(typeof n1=="number"&&typeof n2=="number")
    {
    return n1+n2
    }
    else
    {
        console.log("please check both input");
    }
}
let result=sum(5,6)
console.log(result);
function loginUserMessage(username){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
let message=loginUserMessage("shivam")
console.log(message);
function calculatecart(...num1)//you can also pass(val1,val2,...num1)val1=200,val2=300,num1=[400,500] 
{
  let sum=0
  for(i=0;i<num1.length;i++)
  {
    sum=sum+num1[i]
  }
  return sum
}
console.log(calculatecart(200,300,400,500))

const user1={
      username:"shiva",
      age:19
}
function elegible(ob)
{
    console.log(`welcome,${ob.username}`);
    if(ob.age>18)
    {
        console.log(`congratulations ${ob.username} you are elegible for voting...🤩, your age is ${ob.age}`);
    }
    else
    {
        console.log(`ohhh! sorry ${ob.username}, you are not elegible for voting`);
        
    }
}
elegible(user1)
elegible({
    username:"abhishek",
    age:22
})

console.log(addone(5))//execute

function addone(num){
    return num + 1
}



/*addTwo(5)//give error called hoisting occur because hold function on variable and called before intialization
const addTwo = function(num){
    return num + 2
}*/
