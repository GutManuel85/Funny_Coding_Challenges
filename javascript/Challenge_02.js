//Berechne die Summe von allen Zahlen von 1 bis n.

const sumNumbers = function(start, end){
    let result = 0;
    for(let i = start; i <= end; i++){
        result += i;
    }
    console.log(result);
    return result;
}

sumNumbers(1,10);

const sumNumbersPyramide = function(start, end){
    let result = 0;
    for(let i = start; i <= end; i++){
        result += i;
    }
    for(let i = (end - 1); i >= start; i--){
        result += i;
    }
    console.log(result);
    return result;
}

sumNumbersPyramide(1, 10);
