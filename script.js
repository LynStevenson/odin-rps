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
    let rounds = 0;
    let rock = document.querySelector("#Rock");
    let scissors = document.querySelector("#Scissors");
    let paper = document.querySelector("#Paper");
    let results = document.querySelector("#Results");
    function playRound(humanChoice, botChoice){
        if (humanChoice === botChoice){
            results.textContent = "It's a tie! Both players selected " + humanChoice;
        } else if (humanChoice === "rock" && botChoice === "scissors"
                    || humanChoice === "scissors" && botChoice === "paper"
                    || humanChoice === "paper" && botChoice === "rock"){
            results.textContent = "You win! " + humanChoice + " beats " + botChoice;
            humanScore++;
        } else if (humanChoice === "rock" && botChoice === "paper"
                    || humanChoice === "scissors" && botChoice === "rock"
                    || humanChoice === "paper" && botChoice === "scissors"){
            results.textContent = "You lose! " + humanChoice + " lost to " + botChoice;
            botScore++;
        } else {results.textContent = "logic error in playRound";}
        rounds++;
        if (rounds == 5) {
            if (humanScore > botScore){
                results.textContent = "Congrats! You won Rock Paper Scissors!";
            } else {
                results.textContent = "The computer won Rock Paper Scissors! Try again!";
            }
            rounds = 0;
            botScore = 0;
            humanScore = 0;
        }
    }
    rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
    scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));
    paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
}

playGame();