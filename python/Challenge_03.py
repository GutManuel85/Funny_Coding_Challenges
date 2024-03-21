'''
Schreibe eine Funktion, welche einen Text entgegen nimmt und darin zählt, wie oft jeder Buchstabe 
des deutsch Alphabets vorkommt.
'''

import string

def countAllLettersInText(text):
    letters = list(string.ascii_lowercase)
    letters.extend(["ä", "ö", "ü", 'ß'])

    text = text.casefold() # whole text in lower case

    result = {} # empty dictionary

    for letter in letters:
        amount = text.count(letter)
        result[letter] = amount
        print("Der Buchstabe {} kommt {} mal vor".format(letter, result[letter]))

    print(result)

    return result

myResult = countAllLettersInText("Hallo, das ist ein Text")
