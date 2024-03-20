//Finde alle Zahlen zwischen 0 und 1000, die durch 3, 5 und 7 teilbar sind

function numbersDividableThrough(start, end, dividend1, dividend2, dividend3){
    dividableNumbers = [];
    for(let i = start; i < end; i++){
        if(isDividable(i)){
            dividableNumbers.push(i);
        }
    }
    console.log(dividableNumbers);
    return dividableNumbers;

    function isDividable(number){
        return (number % dividend1 === 0) && (number % dividend2 === 0) && (number % dividend3 === 0);
    }
}

numbersDividableThrough(1, 1000, 3, 5, 7);
