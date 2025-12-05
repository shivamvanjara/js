const a=[0,1,2,3,4,5,6]
//not fixed size you can add element(resizeble)
//mix datatype happend
//share sallow copy(share same reference point)
const b= new Array(1,3,5,7)
console.log(a[0]);
//methods
a.push(7)//push element in last
a.pop()//remove last element
a.unshift(10)//add element in starting
a.shift()//remove 0 index value and shift all values to n-1
a.includes(5)//check includes or not
a.indexOf(3)//return index value
const c=a.join()//store in string type
const d=a.slice(1,4)//include element of index 1,2,3
const e=a.splice(1,4)//print index 1,2,3,4 and remove splice index from original array

//<<--------------------------------functions----------------------->>
const name=["shivam","krishna","rajesh","hiren"]
const city=["rajkot","ahmedabad","surat","baroda"]
/*name.push(city)
console.log(name)//return nested array*/
const d1=[...name,...city]//spread method join without nested array
console.log(d1);
const number=[1,2,3,[5,6,7],[4,5],[8,9,[10,11]]]
const n1=number.flat(2)//merge n1 in 1 array, give depth as argument, also infinity as argument
console.log(n1);
console.log(Array.isArray(n1));
console.log(Array.isArray("shivam"));//check given argument array or note
console.log(Array.from("shivam"));//convert given argument to array
let s1=100
let s2=400
let s3=600
console.log(Array.of(s1,s2,s3));