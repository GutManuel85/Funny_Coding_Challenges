// Erstelle eine Wichtel-App, mit denen bestimmt wird, wer zu Weihnachten wem etwas schenkt. Dabei darf niemand sich selbst beschenken.

// Wichtig: Programm muss in den Browser kopiert werden, damit die prompt() Funktion funktioniert.

const commandMessage = `Hier sind die möglichen Befehle:
- p: Person erfassen,
- w: Wichtel zuteilen,
- q: Beenden
Bitte Befehl eingeben: `;

let command = "p";
const persons = [];

while (command !== "q") {
  command = readLine(commandMessage);
  switch (command) {
    case "p":
      persons.push(readLine("Bitte Person eingeben: "));
      break;
    case "w":
      allocateGifts(persons);
      break;
    case "q":
      console.log("Bis zum nächsten mal");
      break;
    default:
      console.log("Bitte gültige Taste drücken");
  }
}

function allocateGifts(persons) {
  console.log("Geschenke werden zugeteilt.");
  let mixedPersons = shuffleArray(persons);
  for (let i = 0; i < mixedPersons.length; i++) {
    if (i < mixedPersons.length - 1) {
      console.log(`${mixedPersons[i]} beschenkt ${mixedPersons[i + 1]}`);
    } else {
      console.log(`${mixedPersons[i]} beschenkt ${mixedPersons[0]}`);
    }
  }
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function readLine(question) {
  console.log(question);
  let input = prompt();
  console.log(`Deine Antwort: ${input}`);
  return input;
}
