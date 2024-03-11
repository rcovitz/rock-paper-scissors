function getComputerChoice() {
    // Returns random value between rock paper scissors by randomizing index num
    return CHOICES[Math.floor(Math.random() * 3)];
}

function playerInput() {
    // Prompts player for input, then makes lowercase.
    return prompt("Please input rock, paper, or scissors: ").toLowerCase()
}

function chooseWinner(computerChoice, playerChoice) {
    // Checks for ties
    if (computerChoice === playerChoice) {
        console.log("Tie: You both chose " + capitalize(computerChoice))
        return
    }
    
    // Checks for a computer win by cycling thru pairs of wins
    for(i = 0; i < 3; i++) {
        if (computerChoice === CHOICES[i] && playerChoice === BEATS[i]) {
            console.log("You Lose: " + capitalize(computerChoice) + " beats " + capitalize(playerChoice))
            return "computer"
        }
    }
    // If computer doesn't win and no ties, then we have player win
    console.log("You Win: " + capitalize(playerChoice) + " beats " + capitalize(computerChoice))
    return "player"
}

// Function to capitalize a word, word >> Word
function capitalize(word) {return word.charAt(0).toUpperCase() + word.slice(1)}

// One round of the game
function playRound() {return chooseWinner(getComputerChoice(), playerInput())}

// The entire game
function playGame() {
    // Counts for scoring at end
    let playerWins = 0
    let computerWins = 0
    // Loop thru all games
    for (let i = 0; i < NUM_GAMES; i++) {
        // Calls round func for each round
        let winner = playRound()
        // Checks if computer or player is winner
        if (winner === "computer") {
            computerWins++
        } else if (winner === "player") {
            playerWins++
        }
    }

    // Ties is when neither player or computer wins
    let ties = NUM_GAMES - playerWins - computerWins
    
    //Printing and formatting
    console.log("Player wins:" + playerWins)
    console.log("Computer wins:" + computerWins)
    console.log("Ties:" + ties)
}

// Global variables
const CHOICES = ["rock", "paper", "scissors"]
const BEATS = ["scissors", "rock", "paper"]
const NUM_GAMES = 5

// Start game
playGame()