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
let rounds = 5;
let userChoice; // then the user selection will be stored here

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

//functions

function setPcChoice(choices) {
    let randomIndex = Math.floor(Math.random() * choices.length); 
    // math.random gives a rand int between [0, 1), multypling by length makes the range to [0, array length), then Math.floor round to closest integer
    return choices[randomIndex];
}

// function userChoice(choices) {
//     let userChoice = prompt("What do you choose?").toLowerCase();
//     while (!choices.includes(userChoice)) { // condition evaluates if answer of the user is inside array choices
//         alert("Please insert a valid option (rock, paper, scissors):");
//         userChoice = prompt("What do you choose?").toLowerCase();
//     }
//     return userChoice;
// }

function setUserChoice(event) {
    userChoice = event.target.id; //it isn't necessary to return anything, just setting the selection
}

function oneRound() {
    let pcChoice = setPcChoice(choices); // "rock", "paper", "scissors"
    let roundResult;
    let result;

    if (userChoice === choices[0] && pcChoice === choices[2]) { //user: rock - pc: scissors
        roundResult = `You win! User: ${userChoice}; Computer: ${pcChoice}`;
        result = "win";
    } else if (userChoice === choices[0] && pcChoice === choices[1]) {//user: rock - pc: paper
        roundResult = `You loose! User: ${userChoice}; Computer: ${pcChoice}`;
        result = "loose";
    } else if (userChoice === choices[1] && pcChoice === choices[0]) {//user: paper - pc: rock
        roundResult = `You win! User: ${userChoice}; Computer: ${pcChoice}`;
        result = "win";
    } else if (userChoice === choices[1] && pcChoice === choices[2]) {//user: paper - pc: scissors
        roundResult = `You loose! User: ${userChoice}; Computer: ${pcChoice}`;
        result = "loose";
    } else if (userChoice === choices[2] && pcChoice === choices[1]) {//user: scissors - pc: paper
        roundResult = `You win! User: ${userChoice}; Computer: ${pcChoice}`;
        result = "win";
    } else if (userChoice === choices[2] && pcChoice === choices[0]) {//user: scissors - pc: rock
        roundResult = `You loose! User: ${userChoice}; Computer: ${pcChoice}`;
        result = "loose";
    } else {
        roundResult = `It's a tie! Both chose ${userChoice}`;
        result = "tie";
    }

    return [roundResult, result];
}

function game(iterations) {
    let userCount = 0;
    let pcCount = 0; 
    let result;

    for (let i = 1; i <= iterations; i++) {
        let runRound = oneRound(userChoice, setPcChoice);

        console.log(`Round number ${i}`);
        console.log(runRound[0]);
        
        if (runRound[1] === "win") {
            userCount++;
        } else if (runRound[1] === "loose") {
            pcCount++;  
        }

        console.log(`Round ${i}; Computer: ${pcCount}; You: ${userCount}`);

        // if (userChoice) {
        //     oneRound();
        // }
    }

    if (userCount > pcCount) {
        result = "win";
    } else {
        result = "loose";
    }
    
    console.log(`Final Count -> Computer: ${userCount}; You: ${pcCount}`);
    console.log(result);
    return result;
}

// Event Listeners

rock.addEventListener('click', userChoice);
paper.addEventListener('click', userChoice);
scissors.addEventListener('click', userChoice);

game(rounds);

