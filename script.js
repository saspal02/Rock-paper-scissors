let playerScore = 0;
let computerScore = 0;
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {

  if (playerSelection === "rock") {
    if (computerSelection === "paper"){
      computerScore++;
      return "You loose!";
    } else if(computerSelection === "scissors"){
      playerScore++;
      return "You win!";
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock"){
      playerScore++;
      return "You win!";
    } else if(computerSelection === "scissors"){
      computerScore++;
      return "You loose!";
    }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "paper"){
      playerScore++;
      return "You win!";
    } else if(computerSelection === "rock"){
      computerScore++;
      return "You loose!";
    }
}

if (playerSelection === computerSelection){
      return "It's a tie !!";
    }

    else {
      return "Invalid Choice. Enter a valid choice !!"
    }
}

function playGame(playerSelection){
  const computerSelection = getComputerChoice();
  const resultMessage = playRound(playerSelection, computerSelection);

  const divResult = document.querySelector("#result");
  divResult.textContent = resultMessage;

  const divScore = document.querySelector("#score");
  divScore.textContent = "Player: " + playerScore  + " Computer: " + computerScore;

  if(playerScore === 3 || computerScore === 3){
    if(playerScore > computerScore){
      divResult.textContent = "Congratulations ! You Won....";
    } else if (computerScore > playerScore ){
      divResult.textContent = "You lost the game! Better luck next time";
    } else{
      divResult.textContent = "It's a tie";
    }
    playerScore = 0;
    computerScore = 0;

  }
}



const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");


btn1.addEventListener("click", function(){
  playGame("rock");
});

btn2.addEventListener("click", function(){
  playGame("paper");
});

btn3.addEventListener("click", function(){
  playGame("scissors");
});