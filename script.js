function getComputerChoice(){
    min = 1;
    max = 3;
    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    if (result == 1){
        return "rock"
    }
    else if (result == 2){
        return "paper"
    }
    else{
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection){
    switch(true){

        case playerSelection == computerSelection:
            return "No one looses"

        case playerSelection == "rock" && computerSelection == "scissors" ||
            playerSelection == "scissors" && computerSelection == "paper"||
            playerSelection == "paper" && computerSelection == "rock":
            result++
            return `Congrat ${playerSelection} beats ${computerSelection}`

        case playerSelection == "rock" && computerSelection == "paper" ||
            playerSelection == "scissors" && computerSelection == "rock" ||
            playerSelection == "paper" && computerSelection == "scissors":
            return `Too bad ${computerSelection} beats ${playerSelection}`

        default:
            return `bug - ${playerSelection} ${computerSelection}`
    }
}

function game(){
    console.log(playRound(playerSelection,computerSelection))
}



let playerSelection
let computerSelection
let result = 0

for (let i = 0; i < 5; i++) {
    computerSelection = getComputerChoice().toString()
    playerSelection = prompt("Rock, paper or scissors ?").toLowerCase()
    game()
    console.log(`Current score: ${result}`)
}