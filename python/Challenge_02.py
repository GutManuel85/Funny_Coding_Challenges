'''
Schreibe eine Funktion, welche einen Text entgegen nimmt und darin zählt, wie oft ein Buchstabe vorkommt,
den du auch als Parameter in die Funktion eingibst.
'''

def countLetterInText(letter, text):
    result = text.count(letter)
    print(result)
    return  result

countLetterInText('e', "Ich heisse Manuel Gut") # 3
countLetterInText('s', "Ich heisse Manuel Gut") # 2
countLetterInText('o', "Ich heisse Manuel Gut") # 0
