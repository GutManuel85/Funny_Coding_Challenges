'''
Erstelle ein einfaches Bankensystem, das es dem Benutzer ermöglicht, Konten zu erstellen,
Geld einzuzahlen und abzuheben.
'''

class BankAccount:
    def __init__(self, id, name, firstName, minusLimit):
        self.__id = id
        self.__name = name
        self.__firstName = firstName
        self.__balance = 0.0
        self.__minusLimit = minusLimit

    # Einzahlen
    def deposit(self, value):
        self.__balance += value

    def withdraw(self, value):
        if(self.__minusLimit <= (self.__balance - value)):
            self.__balance -= value
        else:
            maxValue = - self.__minusLimit + self.__balance
            print("Maximaler Bezug von CHF {} erlaubt.".format(maxValue))

    def __str__(self):
        return f'''ID: {self.__id} | Name: {self.__name} | Vorname: {self.__firstName} | Kontostand: CHF {self.__balance} | Minuslimite: CHF {self.__minusLimit}'''
    
    def get_id(self):
        return self.__id


class Bank:

    def __init__(self, id, name):
        self.__id = id
        self.__name = name
        self.__accounts = {}
        self.__accountCounter = 0

    def createAccount(self, name, firstName, minusLimit):
        account = BankAccount(self.__accountCounter, name, firstName, minusLimit)
        self.__accounts[account.get_id()] = account
        self.__accountCounter += 1

    def getAccount(self, id):
        return self.__accounts[id]



bank1 = Bank(0, "UBS")
bank1.createAccount("Gut", "Manuel",-500)
account1 = bank1.getAccount(0)
account1.deposit(400)
print(account1)
account1.withdraw(901)
account1.withdraw(900)
print(account1)
