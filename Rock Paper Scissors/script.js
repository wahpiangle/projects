let computerScore = 0;
let playerScore = 0;
let roundWinner ='';

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3)+1; //rng will be 1,2 or 3
    switch(computerChoice){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function getPlayerChoice(){
    let playerChoice = prompt("Enter your choice");
    let playerChoiceLower = playerChoice.toLowerCase();
    return playerChoiceLower;
}

function playGame(choiceOfComputer, choiceOfPlayer){
    if (choiceOfComputer == choiceOfPlayer)
    {
        roundWinner = "tie";
    }
    else if( (choiceOfComputer == "rock" && choiceOfPlayer =="scissors")||
            (choiceOfComputer == "paper" && choiceOfPlayer == "rock") ||
            (choiceOfComputer == "scissors" && choiceOfPlayer == "paper"))
    {
        computerScore++;
        roundWinner = 'computer';
    }
    else{
        playerScore++;
        roundWinner='player';
    }
}

function gameOf5(){
    
    for (let i =0; i<5; i++)
    {
        playGame(getComputerChoice(),getPlayerChoice());
        
    }
    alert("Player score is: " + playerScore + "\nComputer score is: " + computerScore);
}
gameOf5();

