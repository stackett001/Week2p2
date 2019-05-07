// var hands = ["rock", "paper", "scissors"];
// document.getElementById("rock").addEventListener("click", choseRock);
// document.getElementById("paper").addEventListener("click", chosePaper);
// document.getElementById("scissors").addEventListener("click", choseScissors);



// function getHand(){
// 	var myHand = hands[parseInt(Math.random() * 3)];
// 	return myHand;
// }

// var dude1 = {
// 	name: "Hulk",
// 	score: {
// 		wins: 0,
// 		ties: 0,
// 		losses: 0,
// 	}
// }

// var dude2 = {
// 	name:  "Thor",
// 	score:  {
// 		wins: 0,
// 		ties: 0,
// 		losses: 0,
// 	}
// }

// function playRound(p1, p2){
// 	p1.hand = getHand();
// 	p2.hand = getHand();
// 	if (p1.hand === p2.hand) {
// 		p1.score.ties ++
// 		p2.score.ties ++
// 		console.log("It's a tie!");
// 	}
// 	if (p1.hand === "rock") {
// 		if (p2.hand === "paper"){
// 			console.log(p2.name + " won");
// 			p2.score.win ++
// 			p1.score.losses ++
// 		}
// 		else if (p2.hand === "scissors"){
// 			console.log(p1.name + " won");
// 			p1.score.win ++
// 			p2.score.losses ++
// 		}
// 	}
// 	if (p1.hand === "paper") {
// 		if (p2.hand === "scissors"){
// 			console.log(p2.name + " won");
// 			p2.score.win ++
// 			p1.score.losses ++
// 		}
// 	}
// }

// function playGame () {
// 	for(var i = 0; i < 5; i++){
// 		playRound(dude1, dude2)
// 	}
// 	console.log(dude1.score, dude2.score);
// 	playUntil(dude1,dude2)
// }

// function playUntil(arg1, arg2) {
// 	var winner = null;
// 	if (arg1.score.win > arg2.score.win) {
// 		console.log(arg1.name + " is the tournament winner!");
// 		winner = arg1;
// 	}
// 	if (arg1.score.win < arg2.score.win) {
// 		console.log(arg1.name + " is the tournament winner!");
// 		winner = arg2
// 	}
// 	if(arg1.score.wins === arg2.score.wins) {
// 		console.log("Play again! There was no winner. It was a tie.")
// 		winner = null;
// 	}
// 	return winner
// }


// playGame();

//Kyle
// document.getElementById("rock").addEventListener("click", chooseRock);
// document.getElementById("paper").addEventListener("click", choosePaper);
// document.getElementById("scissors").addEventListener("click", chooseScissors);


// var myAnswer =null;
// var comAns = Math.floor(Math.random() * 3);

// addEventListener("click", startGame)
// function chooseRock(){
//     myAnswer = "rock";
// }

// function choosePaper(){
// 	myAnswer = "paper";
// }

// function chooseScissors(){
// 	myAnswer = "scissors";
// }

// function logic(){
//     if(myAnswer === comAns){
//         console.log("tie");
//     }
//     if(comAns === "rock"){
//         if(myAnswer === "paper"){
//             console.log("i win");
//         }
//         if(myAnswer === "scissors"){
//             console.log("they win");
//         }
//     }
//     if(comAns === "paper"){
//         if(myAnswer === "rock"){
//             console.log("they win");
//         }
//         if(myAnswer === "scissors"){
//             console.log("i win");
//         }
//     }
//     if(comAns === "scissors"){
//         if(myAnswer === "paper"){
//             console.log("they win");
//         }
//         if(myAnswer === "rock"){
//             console.log("i win");
//         }
//     }
// }

var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var userScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result > p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");


function main() {
	rock_div.addEventListener("click", function () {
		game("r");
	})
	paper_div.addEventListener("click", function () {
		game("p");
	})
	scissors_div.addEventListener("click", function () {
		game("s");
	})
}

function getComputerChoice() {
	var choices = ["r", "p", "s"];
	var randomNumber = Math.floor(Math.random) * 3;
	return choices[randomNumber];
}

function win(userChoice, computerChoice) {
  userScore++;
  console.log("win");
  console.log(userScore);
  result_p.innerHTML = "You win!";
}

function lose(userChoice, computerChoice) {
  computerScore++;
  console.log("lose");
  console.log(userScore);
  result_p.innerHTML = "You lose!";
}

function tie(userChoice, computerChoice) {
  
  console.log("tie");
  console.log(userScore);
  
  result_p.innerHTML = "It's a tie!";
}

function game(userChoice) {
	var computerChoice = getComputerChoice();
	// console.log("user choice =>" + userChoice);
	// console.log("computer choice =>" + computerChoice);
	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
		  win(userChoice, computerChoice);
			console.log("YOU WINS");
		  break;
		 case "rp":
		 case "ps":
		 case "sr":
		   lose();
		 	console.log("YOU LOSE");
		   break;
		 case "rr":
		 case "pp":
		 case "ss":
		 	console.log("IT'S A TIE");
		 	tie();
		   break;
		}
	}



