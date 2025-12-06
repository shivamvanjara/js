const number=[1,2,3,4,5,6,7,8]
const newnumber=number.map((num)=>(num*num))
console.log(newnumber)

const set1=number.map((numm)=>(numm+10)).map((numm)=>(numm-5)).filter((numm)=>(numm%2===0))
console.log(set1)

initial=0;
sum=number.reduce((acc,cur)=>(acc+cur),initial)

console.log(sum)
const myTotal = number.reduce(function (acc, currval) {
  
    return acc + currval
}, 0)
console.log(myTotal)