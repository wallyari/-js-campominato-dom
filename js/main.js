const playButton = document.getElementById('play');
document.getElementById('play'). addEventListener('click',
function(){
    createNewGame();

}
)
//crea funzione per generare una nuova partita sovrascrivendo la precedente
function createNewGame(){
    //reset
    document.querySelector('#grid').innerHTML = " ";

    //recupero il livello selezionato dall'utente
    //stabilisco le condizioni date dal livello selezionato
    const level = parseInt(document.getElementById('level').value);

    //GENERAZIONE DELLA GRIGLIA
    //stabilire caselle in base al valore delle difficoltà
    let cellsPerRow;
    let cellsNumber;
    
    
    
    switch (level ){
        case 1:
        default:
            cellsNumber = 100;
            break;
        case 2:   
        cellsNumber = 81;
            break;
        case 3:  
            cellsNumber = 49;
            break;  
    }
    //radice quadrata di cellsNumber
    cellsPerRow = Math.sqrt(cellsNumber);
    
    for ( let i = 1; i <= cellsNumber; i++){
        //!array bombe random
        const bombs = generateBombList(16, cellsNumber);
        console.log(bombs);
        const cell = createSquare(i, cellsPerRow);
        cell.addEventListener('click', function(){
            this.classList.add('clicked');
        });
        document.querySelector('#grid').appendChild(cell);
    }

}

//genera il singolo box
function createSquare(number, cellsPerRow){
    //
    let cell = document.createElement('div');
    cell.classList.add('square');
    cell.style.width = `calc(100% / ${cellsPerRow})`
    cell.style.height = cell.style.width;

    cell.innerHTML= `<span> ${number} </span>`;
    return cell;


};


//Il computer deve generare 16 bombe (casuali).
//Inserisco i 16 numeri generati in un arrey (con un ciclo for).
//Eventlister rosso=bomba/ nessun variazione (aggiungiamo un punto).
function generateBombList(bombs, numberOfCells){    
    const bombList = [];    
    for(i = 0 ; i < bombs ; i++){      
        bombList.push(generateUniqueRandomNumber(bombList, 1, numberOfCells));
    }
    return bombList;
}

















/**
 * Function that generates a random number between two included values, which is not already present in the given blacklist.
 *
 * @param {*} numsBlacklist The blacklist to check.
 * @param {*} min The minimum value of the random generated integer.
 * @param {*} max The maximum value of the random generated integer.
 * @returns A random generated integer which is not present in the blacklist.
 */
function generateUniqueRandomNumber( numsBlacklist, min, max){

    let check = false;
    let randomInt;
    while ( !check ){

        randomInt  = Math.floor(Math.random() * ((max + 1) - min) + min);
        if ( !numsBlacklist.includes(randomInt)  ){
            check = true;
        }
    }
    return randomInt;
}

