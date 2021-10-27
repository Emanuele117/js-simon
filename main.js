//un alert espone 5 numeri generati casualmente , da lì parte un timer di 30 secondi.

// dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

/* 
- alert()

- setTimeout()

- prompt()
*/


// espongo 5 numeri random tramite un alert

for (let i = 0; i < 5; i++) {
    const element = Math.round(Math.random() * 100);

    alert(element)
}

var count = 30

var counter = setInterval(timer, 1000);

function timer() {
    count = count - 1;
    if (count <= 0) {
        clearInterval(counter);
        for (let i = 0; i < 5; i++) {
            const element = parseInt(prompt('inserisci qui il numero'));

        }
        return;
    }


}



