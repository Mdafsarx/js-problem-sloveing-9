// average of odd numbers

const array=[12,11,23,45,67,79,5];
const array2=[]

function avgOdd(number){
let sum=0;
let Length=0;

    number.forEach(num => {

if(num % 2 !==0){
Length++
    array2.unshift(num)
    sum=sum+num;
} });

const avg=sum / Length;
return` avg : ${avg} odd number: ${array2}`

}
const output=avgOdd(array)
console.log(output)