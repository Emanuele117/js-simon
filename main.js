//un alert espone 5 numeri generati casualmente , da lì parte un timer di 30 secondi.

// dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


/* 
- alert()

- setTimeout()

- prompt()
*/


// espongo 5 numeri random tramite un alert

let randomNumbers = []

let guessedNumbers = []

i = 0

while (i < 5) {

    const random = Math.round(Math.random() * 100);
    if (!randomNumbers.includes(random)) {
        randomNumbers.push(random)
    }

    i++
}
alert(randomNumbers)


// creo il timer di 30 sec 
var count = 5

var counter = setInterval(timer, 1000);

function timer() {
    count = count - 1;
    if (count <= 0) {
        // terminato il timer chiedo all'utente di inserire i numeri appena visti
        clearInterval(counter);
        for (let i = 0; i < 5; i++) {
            const insertNumber = parseInt(prompt('inserisci qui il numero'));
            if (!guessedNumbers.includes(insertNumber)) {
                guessedNumbers.push(insertNumber)
            }
        }

        return;
    }

}




