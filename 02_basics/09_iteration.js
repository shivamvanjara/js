const mynum=[1,2,3,4,5,6,7,8,9];
let newnum=mynum.filter((num)=>(num>5));
console.log(newnum);
let new1=mynum.filter((num)=>{
    return num%2==0;
})
console.log(new1);
let new2=[]
mynum.forEach((num)=>{
    if(num%2!=0){
        new2.push(num);
    }
})
console.log(new2);
