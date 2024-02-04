/* You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0 */



const array=[5,6,11,12,98, 5,5,25];

const Chack=(number)=>{
let sum=0;
let sum2=0;

for(const num of number){
if(num===5){
    sum++
}
else if(num===25){
    sum2++
}
}
console.log(`25 : ${sum2}`)
return `5 : ${sum}`;


}
const output=Chack(array)
console.log(output);