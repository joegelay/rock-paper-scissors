const button = document.querySelector('.buttons');

button.addEventListener('click', (e) => {
    playerSelection = e.srcElement.id;
    playRound();
});

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

let playRound = function () {

    let min = 1;
    let max = 4;
    let computerSelection =
        Math.floor((Math.random() * (max - min)) + min);

    if (playerSelection == "rock") {
        playerSelection = 1
    } else if (playerSelection == "paper") {
        playerSelection = 2
    } else if (playerSelection == "scissors") {
        playerSelection = 3
    }

    if (computerSelection == playerSelection) {
        result = "Tie! Try again!"
        console.log(result)
    } else if (computerSelection == 1 && playerSelection == 2) {
        result = "You win! Paper covers rock!"
        console.log(result)
    } else if (computerSelection == 1 && playerSelection == 3) {
        result = "You lose! Rock crushes scissors!"
        console.log(result)

    } else if (computerSelection == 2 && playerSelection == 1) {
        result = "You lose! Paper covers rock!"
        console.log(result)
    } else if (computerSelection == 2 && playerSelection == 3) {
        result = "You win! Scissors cuts paper!"
        console.log(result)

    } else if (computerSelection == 3 && playerSelection == 1) {
        result = "You win! Rock crushes scissors!"
        console.log(result)
    } else if (computerSelection == 3 && playerSelection == 2) {
        result = "You lose! Scissors cuts paper!"
        console.log(result)

    }

    console.log(computerSelection, playerSelection)

    if (result.includes("win"))
        playerScore++;
    else if (result.includes("lose"))
        computerScore++;
    else if (result.includes("Tie"))
        tieScore++;
    console.log(playerScore, computerScore);


    const humanScore = document.querySelector('#humanScore');
    humanScore.textContent = "Human: " + playerScore;

    const compScore = document.querySelector('#computerScore');
    compScore.textContent = "Computer: " + computerScore;

    const drawScore = document.querySelector('#tieScore');
    drawScore.textContent = "Ties: " + tieScore;

    if (playerScore == 5 && computerScore < 5) {
        alert("You Win!")
        window.location.reload();
    } else if (computerScore == 5 && playerScore < 5) {
        alert("You Lose!")
        window.location.reload();
    }

}