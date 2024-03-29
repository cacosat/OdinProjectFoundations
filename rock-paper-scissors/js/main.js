// Odins project Rock Paper Scissors assignment:
// 1. Computer choice function:
// Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

// 2. Signle round function: 
// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
// Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on.

// 3. Functoin game(), 5 rounds:
// Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
// You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
// At this point you should be using console.log() to display the results of each round and the winner at the end.

// Juego de 5 rounds de rock paper scissors, el computador elige una opción por medio de una función, la cual luego se usa en otra función que corre un round del juego, considerando la elección del pc (por función) y la del usuario, y que mantiene registro de quien ganó y avisa al usuario. Finalmente, esto se repite 5 veces para todo el jugo

// --------------------------------------------
// --------------------------------------------

// Variables

let choices = ["rock", "paper", "scissors"]; // choices array
let rounds = 5; // num of iterations for the game
let round = 0; //current iteration
let userChoice; // the user selection will be stored here
let pcChoice; // pc selection will be stored here
let userCount = 0; // keeps track of user score
let pcCount = 0; // keeps track of user score
let result; // stores string with final result

// DOM elements
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const domRoundsCurrent = document.querySelector('.current-round');
const domRoundsTotal = document.querySelector('.total-rounds');
const domUserScore = document.querySelector('.user-score');
const domPcScore = document.querySelector('.pc-score');
const domRoundResult = document.querySelector('.round-result');
const domFinalResult = document.querySelector('.final-result')

// Functions

function setPcChoice(optionsArray) {
    let randomIndex = Math.floor(Math.random() * optionsArray.length); 
    // math.random gives a rand int between [0, 1), multypling by length makes the range to [0, array length), then Math.floor round to closest integer
    pcChoice = optionsArray[randomIndex];
}

function setUserChoice(event) {
    userChoice = event.target.id; //it isn't necessary to return anything, just setting the selection
}

function oneRound() {
    setPcChoice(choices); // Sets pc choice to a random choice between rock, paper, scissors
    let roundResult;
    let result;

    if (userChoice === choices[0] && pcChoice === choices[2]) { //user: rock - pc: scissors
        roundResult = `You win!`;
        result = "Winner!";
    } else if (userChoice === choices[0] && pcChoice === choices[1]) {//user: rock - pc: paper
        roundResult = `You loose!`;
        result = "Looser!";
    } else if (userChoice === choices[1] && pcChoice === choices[0]) {//user: paper - pc: rock
        roundResult = `You win!`;
        result = "Winner!";
    } else if (userChoice === choices[1] && pcChoice === choices[2]) {//user: paper - pc: scissors
        roundResult = `You loose!`;
        result = "Looser!";
    } else if (userChoice === choices[2] && pcChoice === choices[1]) {//user: scissors - pc: paper
        roundResult = `You win!`;
        result = "Winner!";
    } else if (userChoice === choices[2] && pcChoice === choices[0]) {//user: scissors - pc: rock
        roundResult = `You loose!`;
        result = "Looser!";
    } else {
        roundResult = `It's a tie!`;
        result = "Tie!";
    }

    return [roundResult, result];
}

function game(choice) {
    userChoice = choice;
    let runRound = oneRound();
    round++;

    if (runRound[1] === "Winner!") {
        // user won, plus 1 point
        userCount++;
    } else if (runRound[1] === "Looser!") {
        // pc won, plus 1 point
        pcCount++;
    }

    domRoundsCurrent.textContent = round;
    domRoundsTotal.textContent = rounds;
    domUserScore.textContent = userCount;
    domPcScore.textContent = pcCount;
    domRoundResult.textContent = ': ' + runRound[1];

    //Prints results to console
    //console.log(`Round ${round}/${rounds}`);
    //console.log(runRound[0]); // prints roundResult (a string informing the player the result)
    //console.log(`Computer: ${pcChoice} / User: ${userChoice}`);
    //console.log(`Score: U ${userCount} : P ${pcCount}`);

    if (round === rounds) {
        // maximum iterations of the game reached, game is finished
        if (userCount > pcCount) {
            //console.log("User Winner");
            domFinalResult.textContent = "Winner!";
        } else if (userCount < pcCount) {
            //console.log("User Looser");
            domFinalResult.textContent = "Looser!";
        } else {
            //console.log("Tie");
            domFinalResult.textContent = "Tie!";
        }

        round = 0;
        userCount = 0;
        pcCount = 0;
    } else {
        domFinalResult.textContent= "";
    }
}

// Event Listeners

rock.addEventListener('click', function () {
    // Anonymous function triggered on click to run the main game function
    game("rock");
});
paper.addEventListener('click', function () {
    // Anonymous function triggered on click to run the main game function
    game("paper");
});
scissors.addEventListener('click', function () {
    // Anonymous function triggered on click to run the main game function
    game("scissors");
});


