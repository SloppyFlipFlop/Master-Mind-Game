"use Strict";

// variables
let colors = ['red', 'orange', 'yellow', 'lightgreen', 'blue', 'darkblue', 'pink'];

let turns = 1;

let answer = [];

let guessCount = 0;

let guessArray = [];

document.getElementById('submitButton').onclick = function () {
    submitGuess();
}

document.getElementById('clearButton').onclick = function () {
    clearGuess();
}

let createAnswer = function () {
    answer = [];

    for (; answer.length < 4;) {
        let newColor = color[Math.floor(Math.random() * 7)];
        if (answer.includes(newColor)) {
            // Skips the color
            continue;
        } else {
            answer.push(newColor);
            i++;
        }
    }
}

let chooseColor = function (color) {
    let elemList = document.getElementsByClassName('guess');

    for (let i = 0; i < elemList.length; i++) {
        let elemListItem = elemList[i];
        if (elemListItem.classList.contains(color)) {
            return;
        }
    }

    if (guessCount < 4) {
        guessCount++;
        let guessName = `g${guessCount}`;
        document.getElementById(guessName).classList.add(color)
        guessArray[guessCount] = color;
    }
}

let checkCorrect = function () {
    // correct color, correct spot
    let corrCorr = 0;

    // correct color, incorrect spot
    let corrInc = 0;

    for (let i = 1; i < 5; i++) {
        if (answer.includes(guessArray[i])) {
            if (answer[i - 1] == guessArray[i]) {
                corrCorr++
            } else {
                corrInc++
            }
        }
    }

    let i = 1;

    for (i; i <= corrCorr; i++) {
        let corr = `c${turns}${i}`;
        document.getElementById(corr).classList.add("white");
        corrCount++;
    }

    if (corrCorr == 4) {
        youWin();
    }

    for (i; i <= (corrCorr + corrInc); i++) {
        let corr = `c${turns}${i}`;
        document.getElementById(corr).classList.add("black");
    }
}

createAnswer();

function submitGuess() {
    if (guessArray.length > 4) {
        for (let i = 1; i < 5; i++) {
            let guess = `${turns}${i}`
            document.getElementById(guess);
            document.getElementById(guess).classList.add(guessArray[i]);
        }

        clearGuess();
        turns++;

        if (turn > 9) {
            youLose();
        }
    }
}

function clearGuess() {
    let elemList = document.getElementsByClassName('guess');

    for (let i = 0; i < elemList.length; i++) {
        let elemListItem = elemList[i];
        for (let x = 0; x < colors.length; x++) {
            if (elemListItem.classList.contains(colors[x])) {
                elemListItem.classList.remove(colors[x]);
            }
        }
    }
    guessCount = 0;
    guessArray = [];
}