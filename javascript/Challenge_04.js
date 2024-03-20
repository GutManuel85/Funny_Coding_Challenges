//Prüfe, ob eine Zeichenkette ein Palindrom ist.

const checkPalindrom = function(text, isIgnoredCase){
    if(isIgnoredCase){
        text = text.toLowerCase();
    }
    for(let i = 0; i <= text.length; i++){
        if(!(text[i] === text[text.length - 1 -i])){
            return false;
        }
    }
    return true;
}

console.log(checkPalindrom("Gugug", true)); // true
console.log(checkPalindrom("Gugug", false)); // false
console.log(checkPalindrom("whaaaatt??")); // false
