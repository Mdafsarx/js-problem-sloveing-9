/*
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming

*/
 let sentence='the quick brown fox jumpss over the lazy dog';

function longestWord(letter){
 let letterr=letter.split(' ')
    let maxLength=0;
    longWord='';

    for(const word of letterr){
if(word.length>maxLength){
    maxLength=word.length;
    longWord=word;

}


    }
    console.log(maxLength)
    return longWord;

}

const output=longestWord(sentence);
console.log(output)