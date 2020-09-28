//Constance
const CHOICES = ['rock', 'paper', 'scissors'];

//Variables
let userScore = 0;
let compScore = 0;

//Cast the DOOM
const userScore_span = document.querySelector('#user-score');
const compScore_span = document.querySelector('#comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');

const rock_div = document.querySelector('#rock');
const paper_div = document.querySelector('#paper');
const scissors_div = document.querySelector('#scissors');

//Functions
function getCompChoice() {
    return Math.floor(Math.random() * CHOICES.length);
}

function updateScoreBoard() {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
}

function updateResult(userChoiceIndex, compChoiceIndex, result) {
    result_div.innerHTML = `user<sub>${CHOICES[userChoiceIndex]}</sub> ${result} comp<sub>${CHOICES[compChoiceIndex]}</sub>`;
}

function userWin(userChoiceIndex, compChoiceIndex) {
    userScore += 1;
    updateScoreBoard();
    updateResult(userChoiceIndex, compChoiceIndex, 'beat');
}

function userLose(userChoiceIndex, compChoiceIndex) {
    compScore += 1;
    updateScoreBoard();
    updateResult(userChoiceIndex, compChoiceIndex, 'lose');
}

function draw(userChoiceIndex, compChoiceIndex) {
    updateResult(userChoiceIndex, compChoiceIndex, 'draw');
}

function game(userChoiceIndex) {
    let compChoiceIndex = getCompChoice();

    //user the same as comp, draw
    if (userChoiceIndex == compChoiceIndex) {
        draw(userChoiceIndex, compChoiceIndex);
    }

    //user win
    else if ((userChoiceIndex == 0 && compChoiceIndex == 2) || (userChoiceIndex == 1 && compChoiceIndex == 0) || (userChoiceIndex == 2 && compChoiceIndex == 1)) {
        userWin(userChoiceIndex, compChoiceIndex);
    }

    //user lose
    else {
        userLose(userChoiceIndex, compChoiceIndex);
    }
}

//Add event listeners
rock_div.addEventListener('click', function () {
    game(0);
});

paper_div.addEventListener('click', function () {
    game(1);
});

scissors_div.addEventListener('click', function () {
    game(2);
});
