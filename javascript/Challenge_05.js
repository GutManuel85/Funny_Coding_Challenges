// Konvertiere Temperatur von Celsius nach Fahrenheit und umgekehrt.

function convertTemp(inputValue, inputIsCelsius){
    const factor = 1.79999999;
    const offset = 32;

    if(inputIsCelsius){
        return (1.79999999 * inputValue + 32 )
    }
    else{
        return ((inputValue - offset) / factor);
    }
}

console.log(convertTemp(20, true)); // 68
console.log(convertTemp(40, false)); // 4.4444


