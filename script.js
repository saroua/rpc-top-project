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

function playRound(playerSelection = button.className, computerSelection){
    switch(true){

        case playerSelection == computerSelection:
            return "No one looses"

        case playerSelection == "rock" && computerSelection == "scissors" ||
            playerSelection == "scissors" && computerSelection == "paper"||
            playerSelection == "paper" && computerSelection == "rock":
            result++;
            return `Congrat ${playerSelection} beats ${computerSelection}`

        case playerSelection == "rock" && computerSelection == "paper" ||
            playerSelection == "scissors" && computerSelection == "rock" ||
            playerSelection == "paper" && computerSelection == "scissors":
            resultOpponent++;
            return `Too bad ${computerSelection} beats ${playerSelection}`

        default:
            return `bug - ${playerSelection} ${computerSelection}`
    }
}

/*

function game(){
    console.log(playRound(playerSelection,computerSelection))
}

let playerSelection
let computerSelection

for (let i = 0; i < 5; i++) {
    computerSelection = getComputerChoice().toString()
    playerSelection = prompt("Rock, paper or scissors ?").toLowerCase()
    game()
    console.log(`Current score: ${result}`)
}
*/

let result = 0;
let resultOpponent = 0;
let hasRan = 0;

const body = document.querySelector("#body");
const divBtn = document.querySelector("#divBtn")
const buttons = document.querySelectorAll("button");

const div = document.createElement("div");
div.className = "game";
body.appendChild(div);

const score = document.createElement("p");
score.textContent = `Your current score: ${result}`
divBtn.appendChild(score)

const scoreOpponent = document.createElement("p");
scoreOpponent.textContent = `Current score of computer: ${resultOpponent}`
divBtn.appendChild(scoreOpponent)

let resultText = document.createElement("p");
div.appendChild(resultText)

buttons.forEach((button) => {
    button.addEventListener("click", function(e){
    let playerSelection = button.id;
    let computerSelection = getComputerChoice().toString();
    resultText.textContent = (playRound(playerSelection, computerSelection));
    score.textContent = `Your current score: ${result}`
    scoreOpponent.textContent = `Current score of computer: ${resultOpponent}`
    if(result == 5 && hasRan == 0){
        const winner = document.createElement("p");
        winner.style.display = "flex";
        winner.style.color = "green";
        winner.style.fontSize = "24px";
        winner.style.fontWeight = "bold";
        winner.style.justifyContent = "center";
        winner.textContent = `Congrats you won`;
        div.appendChild(winner);
        hasRan++
    }
    else if(resultOpponent == 5 && hasRan == 0){
        const winner = document.createElement("p");
        winner.style.display = "flex";
        winner.style.color = "red";
        winner.style.fontSize = "24px";
        winner.style.fontWeight = "bold";
        winner.style.justifyContent = "center";
        winner.textContent = `Oh no , the computer won`
        div.appendChild(winner)
        hasRan++
    }
    })
});




