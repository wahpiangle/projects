//Player module
const Player = (sign) => {
    this.sign = sign;

    const getSign = () => {
        return sign;
    };

    return {getSign};
};

//gameBoard module
let gameBoard = (function(){
    const board = ["", "", "", "", "", "", "", "", ""];

    //function to update the board module
    const setField = (index, sign) => {
        if (index > board.length) return;
        board[index] = sign;
    };

    //function to read the board array
    const getField = (index) => {
        if (index > board.length) return;
        return board[index];
    };

    //function to change all elements in the array to ""
    const reset = () => {
    for (let i = 0; i < board.length; i++) {
            board[i] = "";
        }
    };

    return {setField, getField, reset}; //functions that can be called
})();

//display Controller module
let displayController= (function(){
    const gridBoxes = document.querySelectorAll(".box");
    const messageHeader = document.getElementById("player-text");
    const restartBtn = document.getElementById("restart-btn");
    
    //condition for each cell, if not empty and is not over then updateGameBoard
    gridBoxes.forEach((box) =>
        box.addEventListener("click", (e) => {
            if (gameController.getIsOver() || e.target.textContent !== "") return;
            gameController.playRound(parseInt(e.target.dataset.cell));
            updateGameBoard();
        })
    );

    //restart button resets the round counter and clears the board
    restartBtn.addEventListener("click", (e) =>{
        gameBoard.reset();
        gameController.reset();
        updateGameBoard();
        setMessageElement("Player X's turn");
    });

    //update the gridBoxes based on the index of the array
    const updateGameBoard = () =>{
        for(let i = 0; i < gridBoxes.length; i++){
            gridBoxes[i].textContent = gameBoard.getField(i);
        }
    };

    //function to get the winner and get the statement, and uses setMessageElement function to update the header
    const setResultMessage = (winner) =>{
        if(winner === "Draw"){
            setMessageElement("It's a draw!");
        }else {
            setMessageElement(`Player ${winner} has won!`);
        }
    };
    const setMessageElement = (message) => {
        messageHeader.textContent = message;
    };

    return{setResultMessage, setMessageElement};
})();

//gameController module
const gameController = (()=>{
    const Player1 = Player("X");
    const Player2 = Player("O");
    let round = 1;
    let isOver = false;

    const playRound = (gridIndex) =>{
        gameBoard.setField(gridIndex, getCurrentSign());
        if(checkWinner(gridIndex)){
            displayController.setResultMessage(getCurrentSign());
            isOver = true;
            return;
        }
        if(round === 9){
            displayController.setResultMessage("Draw");
            isOver = true;
            return;
        }
        round ++;
        displayController.setMessageElement(`Player ${getCurrentSign()}'s turn`);
    };

    const getCurrentSign = () =>{ //if it is an odd number round, it means it is X's turn
        return round % 2 === 1 ? Player1.getSign() : Player2.getSign();
    }

    const checkWinner = (gridIndex) => {
        const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    
    return winConditions
    //filter here creates new array that contains combinations that include gridIndex, if the combination in winConditions matches the gridIndex, the combination is kept 
    .filter((combination) => combination.includes(gridIndex))
    //checks if the combination of the array contain the same sign with the use of every(), if none of the combinations have the same sign return false
    .some((possibleCombination) =>
        possibleCombination.every((index) => gameBoard.getField(index) === getCurrentSign()));
    };

    const getIsOver = () =>{
        return isOver;
    };

    const reset = () => {
        round = 1;
        isOver = false;
    };

    return {playRound, getIsOver, reset};
})();
