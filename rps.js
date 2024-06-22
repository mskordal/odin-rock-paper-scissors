let humanScore = 0;
let computerScore = 0;
let rounds = 0;

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

function playRound(event)
{
	let humanChoice = event.target.value;
	let computerChoice = getComputerChoice();
	let resultPar = document.querySelector("#result");
	let roundsPar = document.querySelector("#rounds");
	let scorePar = document.querySelector("#score");

	rounds++;
	if (humanChoice == computerChoice)
	{
		resultPar.innerText = "It's tie! Both players chose " + humanChoice + "!";
	}
	else if(humanChoice == "rock" && computerChoice == "paper")
	{
		computerScore++;
		resultPar.innerText = "You lose! " + computerChoice + " beats " + humanChoice + "!";
	}
	else if(humanChoice == "rock" && computerChoice == "scissors")
	{
		humanScore++;
		resultPar.innerText = "You win! " + humanChoice + " beats " + computerChoice + "!";
	}
	else if(humanChoice == "paper" && computerChoice == "scissors")
	{
		computerScore++;
		resultPar.innerText = "You lose! " + computerChoice + " beats " + humanChoice + "!";
	}
	else if(humanChoice == "paper" && computerChoice == "rock")
	{
		humanScore++;
		resultPar.innerText = "You win! " + humanChoice + " beats " + computerChoice + "!";
	}
	else if(humanChoice == "scissors" && computerChoice == "rock")
	{
		computerScore++;
		resultPar.innerText = "You lose! " + computerChoice + " beats " + humanChoice + "!";
	}
	else if(humanChoice == "scissors" && computerChoice == "paper")
	{
		humanScore++;
		resultPar.innerText = "You win! " + humanChoice + " beats " + computerChoice + "!";
	}
	roundsPar.innerText = "Rounds: " + rounds;
	scorePar.innerText = "Human Score: " + humanScore + "  -  Computer Score: " + computerScore;
}

let btns = document.getElementById("buttons");
btns.addEventListener("click", (event) => {
	playRound(event);
});

// playGame();
