let rock = document.getElementById(`rock`)
let paper = document.getElementById(`paper`)
let scissors = document.getElementById(`scissors`)

let you = document.getElementById(`you`)
let middle = document.getElementById(`middle`)
let computer = document.getElementById(`computer`)

let yourScoreParagraph = document.getElementById(`yourScoreParagraph`)
let startButton = document.getElementById(`startButton`)
let computerScoreParagraph = document.getElementById(`computerScoreParagraph`)

let gameStarted = false
let count = 3
let selectedImage
let yourScore = 0
let computerScore = 0
let intervalId

startButton.addEventListener(`click`, start)
rock.addEventListener(`click`, clickImage)
paper.addEventListener(`click`, clickImage)
scissors.addEventListener(`click`, clickImage)

function start() {
  if (selectedImage != null) {
    selectedImage.classList.remove(`selected`)
    selectedImage = null
  }

  you.innerHTML = `Click an item above`
  you.style.backgroundImage = ``
  middle.innerHTML = `3`
  computer.style.backgroundImage = ``
  startButton.disabled = true

  gameStarted = true
  count = 3
  intervalId = setInterval(decreaseCount, 1000)
}

function decreaseCount() {
  count = count - 1

  if (count > 0) {
    middle.innerHTML = count
  } else {
    let selectedItem

    if (selectedImage == null) {
      you.innerHTML = `Nothing selected`
    } else {
      you.innerHTML = ``

      selectedItem = selectedImage.id
      you.style.backgroundImage = `url("${selectedItem}.png")`
    }

    let randomNumber = Math.floor(Math.random() * 3)
    let computerItem

    if (randomNumber == 0) {
      computerItem = `rock`
    } else if (randomNumber == 1) {
      computerItem = `paper`
    } else if (randomNumber == 2) {
      computerItem = `scissors`
    }

    computer.style.backgroundImage = `url("${computerItem}.png")`

    if (selectedItem == null) {
      middle.innerHTML = `Computer wins`
      computerScore++
    } else if (selectedItem == computerItem) {
      middle.innerHTML = `Tie game`
    } else if (selectedItem == `rock`) {
      if (computerItem == `paper`) {
        middle.innerHTML = `Computer wins`
        computerScore++
      } else if (computerItem == `scissors`) {
        middle.innerHTML = `You win`
        yourScore++
      }
    } else if (selectedItem == "paper") {
      if (computerItem == `rock`) {
        middle.innerHTML = `You win`
        yourScore++
      } else if (computerItem == `scissors`) {
        middle.innerHTML = `Computer wins`
        computerScore++
      }
    } else if (selectedItem == "scissors") {
      if (computerItem == `rock`) {
        middle.innerHTML = `Computer wins`
        computerScore++
      } else if (computerItem == `paper`) {
        middle.innerHTML = `You win`
        yourScore++
      }
    }

    yourScoreParagraph.innerHTML = `You: ${yourScore}`
    computerScoreParagraph.innerHTML = `Computer: ${computerScore}`
    startButton.disabled = false

    gameStarted = false
    clearInterval(intervalId)
  }
}

function clickImage() {
  if (gameStarted) {
    if (selectedImage != null) {
      selectedImage.classList.remove(`selected`)
    }

    selectedImage = this
    selectedImage.classList.add(`selected`)
  }
}
