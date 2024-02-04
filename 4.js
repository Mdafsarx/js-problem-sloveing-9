// Generate a random number between 10 to 20.

const game=(number)=>{
    const Random=(Math.floor(Math.random()*10+10)+1)
if(number===Random){
    return ` yeah we are win the guessing game correct ans :${Random}`
}
else{
    return `lose the game the correct ans was ${Random}`
}
}

const output=game(parseInt(20.5))
console.log(output);