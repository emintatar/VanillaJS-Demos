const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");
const message = document.querySelector(".message");

let playerCounter = 0;
let computerCounter = 0;

const computerPlay = () => {
  const choiceArray = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choiceArray.length);
  computerChoice.setAttribute("src", `./img/${choiceArray[random]}.png`);
  return choiceArray[random];
};

const showResult = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        message.innerHTML = "DRAW!";
    }

    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        message.textContent = "YOU WIN!";
        playerCounter++;
        playerScore.innerHTML = playerCounter;
    }

    else {
        message.textContent = "YOU LOSE!";
        computerCounter++;
        computerScore.innerHTML = computerCounter;
    }
};

const eventListeners = () => {
  rock.addEventListener("click", () => {
    playerChoice.setAttribute("src", "./img/rock.png");
    let computerSelection = computerPlay();
    showResult("rock", computerSelection);
  });

  paper.addEventListener("click", () => {
    playerChoice.setAttribute("src", "./img/paper.png");
    let computerSelection = computerPlay();
    showResult("paper", computerSelection);
  });

  scissors.addEventListener("click", () => {
    playerChoice.setAttribute("src", "./img/scissors.png");
    let computerSelection = computerPlay();
    showResult("scissors", computerSelection);
  });
};

eventListeners();
