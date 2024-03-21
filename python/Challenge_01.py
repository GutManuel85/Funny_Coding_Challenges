'''
Erstelle eine Funktion, die als Parameter den Namen, Vornamen und das Alter entgegen nehmen und
daraus einen sinnvollen Satz auf die Konsole ausgib 
'''


def createPersonalSentence(name, firstName, age):
    message = "My name is {} {} and I am {} years old".format(name, firstName, age)
    print(message)

createPersonalSentence("Gut", "Manuel", 38)
