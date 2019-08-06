var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

var you = document.getElementById("you");
var middle = document.getElementById("middle");
var computer = document.getElementById("computer");

var yourScoreDisplay = document.getElementById("yourScore");
var startButton = document.getElementById("start");
var computerScoreDisplay = document.getElementById("computerScore");

var count;
var countId;
var started = false;
var selected = null;
var yourScore = 0;
var computerScore = 0;

startButton.addEventListener("click", start);
rock.addEventListener("click", select);
paper.addEventListener("click", select);
scissors.addEventListener("click", select);

function start() {
    if (selected) {
        selected.classList.remove("selected");
    }

    you.classList.remove("rock", "paper", "scissors");
    you.innerHTML = "Click an item above";
    middle.innerHTML = "3";
    computer.classList.remove("rock", "paper", "scissors");
    startButton.disabled = true;

    count = 1;
    countId = setInterval(increaseCount, 1000);
    started = true;
    selected = null;
}

function select() {
    if (started) {
        if (selected) {
            selected.classList.remove("selected");
        }

        this.classList.add("selected");
        selected = this;
    }
}

function increaseCount() {
    count++;

    if (count == 2) {
        middle.innerHTML = "2";
    }
    else if (count == 3) {
        middle.innerHTML = "1";
    }
    else if (count == 4) {
        if (selected) {
            var selectedItem = selected.getAttribute("id");
            you.classList.add(selectedItem);
            you.innerHTML = "";
        }
        else {
            you.innerHTML = "Nothing selected";
        }

        var computerSelection = Math.floor(Math.random() * 3);

        if (computerSelection == 0) {
            computer.classList.add("rock");
        }
        else if (computerSelection == 1) {
            computer.classList.add("paper");
        }
        else if (computerSelection == 2) {
            computer.classList.add("scissors");
        }

        if (selectedItem == "rock") {
            if (computerSelection == 0) {
                middle.innerHTML = "Tie game";
            }
            else if (computerSelection == 1) {
                middle.innerHTML = "Computer wins";
                computerScore++;
            }
            else if (computerSelection == 2) {
                middle.innerHTML = "You win";
                yourScore++;
            }
        }
        else if (selectedItem == "paper") {
            if (computerSelection == 0) {
                middle.innerHTML = "You win";
                yourScore++;
            }
            else if (computerSelection == 1) {
                middle.innerHTML = "Tie game";
            }
            else if (computerSelection == 2) {
                middle.innerHTML = "Computer wins";
                computerScore++;
            }
        }
        else if (selectedItem == "scissors") {
            if (computerSelection == 0) {
                middle.innerHTML = "Computer wins";
                computerScore++;
            }
            else if (computerSelection == 1) {
                middle.innerHTML = "You win";
                yourScore++;
            }
            else if (computerSelection == 2) {
                middle.innerHTML = "Tie game";
            }
        }
        else {
            middle.innerHTML = "Computer wins";
            computerScore++;
        }

        yourScoreDisplay.innerHTML = "You: " + yourScore;
        computerScoreDisplay.innerHTML = "Computer: " + computerScore;

        startButton.disabled = false;
        started = false;
        clearInterval(countId);
    }
}
