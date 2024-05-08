function getComputerChoice(){
    let botChoice = Math.floor(Math.random() * 3 + 1);
    switch (botChoice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        default:
            return "Error with switch";
    }
}

function getHumanChoice(){
    let humanChoice;
    do {
    humanChoice = prompt("Enter in either: 'rock', 'paper', or 'scissors");
    humanChoice = humanChoice.toLowerCase();
    } while(humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors');
    return humanChoice;
}

function playGame(){
    let humanScore = 0;
    let botScore = 0;
    function playRound(humanChoice, botChoice){
        if (humanChoice === botChoice){
            console.log("It's a tie! Both players selected " + humanChoice);
            return;
        } else if (humanChoice === "rock" && botChoice === "scissors"
                    || humanChoice === "scissors" && botChoice === "paper"
                    || humanChoice === "paper" && botChoice === "rock"){
            console.log("You win! " + humanChoice + " beats " + botChoice);
            humanScore++;
            return;
        } else if (humanChoice === "rock" && botChoice === "paper"
                    || humanChoice === "scissors" && botChoice === "rock"
                    || humanChoice === "paper" && botChoice === "scissors"){
            console.log("You lose! " + humanChoice + " lost to " + botChoice);
            botScore++;
            return;
        } console.log("logic error in playRound");
    }
    for (let i = 1; i<=5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > botScore){
        console.log("Congrats! You won Rock Paper Scissors!");
    } else {
        console.log("The computer won Rock Paper Scissors! Try again!");
    }
}