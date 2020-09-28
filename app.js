//Constance
const CHOICES = ['rock', 'paper', 'scissors'];

//Variables
let userScore = 0;
let compScore = 0;

//Cast the DOOM
let userScore_span = document.querySelector('#user-score');
let compScore_span = document.querySelector('#comp-score');
let scoreBoard_div = document.querySelector('.score-board');
let result_div = document.querySelector('.result');

let rock_div = document.querySelector('#rock');
let paper_div = document.querySelector('#paper');
let scissors_div = document.querySelector('#scissors');

//Functions
function getCompChoice() {
    return Math.floor(Math.random() * CHOICES.length);
}

function userWin() {
    //
}

function userLose() {
    //
}

function draw() {
    //
}

function game(userChoiceIndex) {
    let compChoiceIndex = getCompChoice();

    //user the same as comp, draw
    if (userChoiceIndex == compChoiceIndex) {
        draw();
    }

    //user win
    else if ((userChoiceIndex == 0 && compChoiceIndex == 2) || (userChoiceIndex == 1 && compChoiceIndex == 0) || (userChoiceIndex == 2 && compChoiceIndex == 1)) {
        userWin();
    }

    //user lose
    else {
        userLose();
    }
}

//Add event listeners
rock_div.addEventListener('click', function () {
    game(1);
});

paper_div.addEventListener('click', function () {
    game(2);
});

scissors_div.addEventListener('click', function () {
    game(3);
});
