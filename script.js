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