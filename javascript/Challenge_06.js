// Finde alle Primzahlen bis zu einer gegebenen Zahl n.

const findPrimeNumbers = function(end){
    const primeNumbers = [];

    for(let i = 2; i <= end; i++){
        if(isPrimeNumber(i)){
            primeNumbers.push(i);
        }
    }
    return primeNumbers;

    function isPrimeNumber(number){
        for(i = Math.round((number + 1 )/2); i > 1; i--){
            if(number % i === 0){
                return false;
            }
        }
        console.log(number);
        return true;
    }
}

findPrimeNumbers(10000000);

