//Constance
const CHOICES = ['Rock', 'Paper', 'Scissors'];

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

const CHOICES_DIV = [rock_div, paper_div, scissors_div];

//Functions
function getCompChoice() {
    return Math.floor(Math.random() * CHOICES.length);
}

function updateScoreBoard() {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
}

function userWin(userChoiceIndex, compChoiceIndex) {
    userScore += 1;
    updateScoreBoard();

    result_div.innerHTML = `${CHOICES[userChoiceIndex]}<sub><font size='5'>user</font></sub> beats ${CHOICES[compChoiceIndex].toLowerCase()}<sub><font size='5'>comp</font></sub>.You win!`;

    CHOICES_DIV[userChoiceIndex].classList.add('green-glow');

    setTimeout(function () {
        CHOICES_DIV[userChoiceIndex].classList.remove('green-glow');
    }, 1000);
}

function userLose(userChoiceIndex, compChoiceIndex) {
    compScore += 1;
    updateScoreBoard();

    result_div.innerHTML = `${CHOICES[userChoiceIndex]}<sub><font size='5'>user</font></sub> loses to ${CHOICES[compChoiceIndex].toLowerCase()}<sub><font size='5'>user</font></sub>. You lose!`;

    CHOICES_DIV[userChoiceIndex].classList.add('red-glow');

    setTimeout(function () {
        CHOICES_DIV[userChoiceIndex].classList.remove('red-glow');
    }, 1000);
}

function draw(userChoiceIndex, compChoiceIndex) {
    result_div.innerHTML = `${CHOICES[userChoiceIndex]}<sub><font size='5'>user</font></sub> equals ${CHOICES[compChoiceIndex].toLowerCase()}<sub><font size='5'>comp</font></sub>. It's a draw!`;

    CHOICES_DIV[userChoiceIndex].classList.add('gray-glow');

    setTimeout(function () {
        CHOICES_DIV[userChoiceIndex].classList.remove('gray-glow');
    }, 1000);
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

function resetChoicesColor() {
    rock_div.classList.remove('green-glow');
    rock_div.classList.remove('red-glow');
    rock_div.classList.remove('gray-glow');

    paper_div.classList.remove('green-glow');
    paper_div.classList.remove('red-glow');
    paper_div.classList.remove('gray-glow');

    scissors_div.classList.remove('green-glow');
    scissors_div.classList.remove('red-glow');
    scissors_div.classList.remove('gray-glow');
}

function reset() {
    userScore = 0;
    compScore = 0;

    updateScoreBoard();
    result_div.innerHTML = 'Paper covers rock. You win!';

    resetChoicesColor();
}

//Add event listeners
rock_div.addEventListener('click', function () {
    resetChoicesColor();
    game(0);
});

paper_div.addEventListener('click', function () {
    resetChoicesColor();
    game(1);
});

scissors_div.addEventListener('click', function () {
    resetChoicesColor();
    game(2);
});

scoreBoard_div.addEventListener('click', function () {
    reset();
});
