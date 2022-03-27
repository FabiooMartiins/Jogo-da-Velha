document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {

    let square = event.target;
    let postion = square.id;

    if (handleMove(postion)) {
        setTimeout(() => {
            if (playerTime == 0) {
                alert("O JOGO TERMINOU - O VENCEDOR FOI O JOGADOR 1 (O)");
            } else {
                alert("O JOGO TERMINOU - O VENCEDOR FOI O JOGADOR 2 (X)");
            }
        }, 10);
    }

    updateSquares();
}

function newGame() {
    square.newGame();
}

function updateSquares() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let postion = square.id;
        let symbol = board[postion];

        if (symbol != '') {
            square.innerHTML = `<div class= '${symbol}' ></div>`
        }
    })
}
