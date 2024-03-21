'''
Nimm den Code der vorhergehenden Challenge und ändere ihn so, dass du auf einen Blick siehst, welcher
Buchstabe am meisten vorkommt.
'''


import string

def countAllLettersInText(text):
    letters = list(string.ascii_lowercase)
    letters.extend(["ä", "ö", "ü", 'ß'])

    text = text.casefold() # whole text in lower case

    result = {} # empty dictionary
    maxAmountValue = -1
    maxAmountLetter = None

    for letter in letters:
        amount = text.count(letter)
        result[letter] = amount
        if(amount > maxAmountValue):
            maxAmountValue = amount
            maxAmountLetter = letter


    print(result)
    print("Am häufigsten kommt der Buchstabe '{}' vor - nämlich {} mal"
          .format(maxAmountLetter, maxAmountValue))


    return result

myResult = countAllLettersInText("Hallo, das ist ein Text")
