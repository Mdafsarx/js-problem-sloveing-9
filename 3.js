// Write a function to count the number of vowels in a string.

const string='the quick brown fox jumps over the lazy dog';
let string2=''

const countString=(letter)=>{
    let sum=0;
    for(const word of letter){
        if((word==='a')||(word==='e')||(word==='i')||(word==='o')||(word==='u'))
        {
             string2=string2+word;
                sum++
        }


    }
console.log(`vowel: ${string2}`)
return sum;
}
const output=countString(string);
console.log(output)