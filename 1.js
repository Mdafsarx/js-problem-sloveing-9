// Write a function to convert temperature from Celsius to Fahrenheit.

const cf=(cel)=>{

    const CelsiusToFahrenheit=(cel * 9/5)+32;
    return CelsiusToFahrenheit;


}
const output=cf(1);
console.log(`fahrenheit ${output}`)
