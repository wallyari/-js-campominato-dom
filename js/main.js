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