const Gameboard = (() => {
    let gameboard = ['','','','','','','','',''];

    function render() {
        let boardHtml = '';
        gameboard.forEach((square, index) => {
            boardHtml += `<div class="square" id="square-${index}">${square}</div>`
        })
        document.querySelector('#gameboard').innerHTML = boardHtml;
        const squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
            square.addEventListener('click', Game.handleClick);
        })
    }

    function update(index, value) {
        gameboard[index] = value;
        render();
    }

    function getGameBoard() {
       return gameboard;
    }

    return {
        render,
        update,
        getGameBoard
    }
})();



function createPlayer(name, mark) {
    return {
        name,
        mark
    }
}



const Game = (() => {
    let players= [];
    let currentPlayerIndex;
    let gameOver;

    function start() {
        players = [
            createPlayer(document.querySelector('#player1').value, 'X'),
            createPlayer(document.querySelector('#player2').value, 'O')
        ]
        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.render();
        const squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
            square.addEventListener('click', handleClick);
        })
    }
    
    function handleClick(event) {
       let index = +event.target.id.split('-')[1];
       if(Gameboard.getGameBoard()[index] !== '') {
        return;
       }
       Gameboard.update(index, players[currentPlayerIndex].mark)
       currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    }
    return {
        start,
        handleClick
    }
})();



const startButton = document.querySelector('#start-button')
startButton.addEventListener('click', () => {
   Game.start();
})

