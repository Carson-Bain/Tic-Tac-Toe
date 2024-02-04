const Gameboard = (() => {
    let gameboard = ['','','','','','','','',''];

    function render() {
        let boardHtml = '';
        gameboard.forEach((square, index) => {
            boardHtml += `<div class="square" id="square-${index}">${square}</div>`
        })
        document.querySelector('#gameboard').innerHTML = boardHtml;
    }

    return {
        render
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
    }
    
    return {
        start,
    }
})();



const startButton = document.querySelector('#start-button')
startButton.addEventListener('click', () => {
   Game.start();
})

