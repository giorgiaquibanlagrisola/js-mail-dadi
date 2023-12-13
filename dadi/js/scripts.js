/*
    Generare un numero random da 1 a 6, 
    sia per il giocatore 
    sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

const min = 1;
const max = 6;

const numberPlayer = Math.floor((Math.random() * 6) + 1);
console.log('numberPlayer', numberPlayer, typeof numberPlayer);

const numberComputer = Math.floor((Math.random() * 6) + 1);
console.log('numberComputer', numberComputer, typeof numberComputer);

if (numberPlayer > numberComputer) {
    alert('Hai vinto')
}
else if (numberComputer > numberPlayer) {
    alert('Hai perso')
}
else (
    alert('Pareggio')
)