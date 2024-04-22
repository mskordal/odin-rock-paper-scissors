let humanScore = 0;
let computerScore = 0;

/* Randomly return "rock", "paper" or "scissors" */
function getComputerChoice() {
	let randInt0to2 = Math.floor(Math.random() * 3);
	if (randInt0to2 == 0)
		return "rock";
	else if (randInt0to2 == 1)
		return "paper";
	else
		return "scissors";
}

/* Prompt user to typer "rock" "paper" "scissors" or cancel */
function getHumanChoice() {
	let choice = "start";
	choice = prompt("Enter rock, paper or scissors");
	if(choice != null)
			choice = choice.toLowerCase();
	while (choice != "rock" && choice != "paper" && choice != "scissors" && choice != null) {
		choice = prompt("Enter rock, paper or scissors");
		if(choice != null)
			choice = choice.toLowerCase();
	}
	return choice;
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice == computerChoice) {
		console.log("It's tie! Both players chose " + humanChoice + "!");
	} else if(humanChoice == "rock" && computerChoice == "paper") {
		computerScore++;
		console.log("You lose! " + computerChoice + " beats " + humanChoice + "!");
	} else if(humanChoice == "rock" && computerChoice == "scissors") {
		humanScore++;
		console.log("You win! " + humanChoice + " beats " + computerChoice + "!");
	} else if(humanChoice == "paper" && computerChoice == "scissors") {
		computerScore++;
		console.log("You lose! " + computerChoice + " beats " + humanChoice + "!");
	} else if(humanChoice == "paper" && computerChoice == "rock") {
		humanScore++;
		console.log("You win! " + humanChoice + " beats " + computerChoice + "!");
	} else if(humanChoice == "scissors" && computerChoice == "rock") {
		computerScore++;
		console.log("You lose! " + computerChoice + " beats " + humanChoice + "!");
	} else if(humanChoice == "scissors" && computerChoice == "paper") {
		humanScore++;
		console.log("You win! " + humanChoice + " beats " + computerChoice + "!");
	}
	console.log("Human Score: " + humanScore + "  -  Computer Score: " + computerScore);
}

function playGame() {
	for (let rounds = 0; rounds < 5; rounds++) {
		let humanChoice = getHumanChoice();
		if (humanChoice == null) {
			console.log("Game terminated by user!")
			console.log("Human Score: " + humanScore + "  -  Computer Score: " + computerScore);
			break;
		}
		let computerChoice = getComputerChoice();
		result = playRound(humanChoice, computerChoice);
	}
}

playGame();