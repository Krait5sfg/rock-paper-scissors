'use strict';

function computerPlay() {
    let numRandom = Math.ceil(Math.random() * 3);
    switch (numRandom) {
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Scissors';
            break;
    }
}


function playRound(playerSelection, computerSelection) {
    let plSel = playerSelection.toLowerCase().slice(0, 1);
    plSel = plSel.toUpperCase();
    plSel = plSel.concat('', playerSelection.toLowerCase().slice(1, playerSelection.length));

    let comSel = computerSelection();
    console.log(`player selection - ${plSel} and computer selection - ${comSel}`);
    switch (true) {
        case (plSel == 'Rock' && comSel == 'Paper'):
            return "You Lose! Paper beats Rock";
        case (plSel == 'Rock' && comSel == 'Scissors'):
            return "You Win! Rock beats Scissors";
        case (plSel == 'Rock' && comSel == 'Rock'):
            return "Drawn game! Rock equal Rock";

        case (plSel == 'Paper' && comSel == 'Rock'):
            return "You Win! Paper beats Rock";
        case (plSel == 'Paper' && comSel == 'Scissors'):
            return "You Lose! Scissors beats Paper";
        case (plSel == 'Paper' && comSel == 'Paper'):
            return "Drawn game! Paper equal Paper";

        case (plSel == 'Scissors' && comSel == 'Rock'):
            return "You Lose! Rock beats Scissors";
        case (plSel == 'Scissors' && comSel == 'Paper'):
            return "You Win! Scissors beats Paper";
        case (plSel == 'Scissors' && comSel == 'Scissors'):
            return "Drawn game! Scissors equal Scissors";

    }
}

function game(gameLength) {
    let scoreCom = 0;
    let scorePl = 0;

    for (let x = 0; x < gameLength; x++) {
        let playerSelection = window.prompt('Input Your choice: Rock, Paper or Scissors');
        let result = playRound(playerSelection, computerPlay);
        if (result.search('You Win') === 0) {
            scorePl++;
        } else if (result.search('Drawn game') === 0) {
            scoreCom++;
            scorePl++;
        } else if (result.search('You Lose') === 0) {
            scoreCom++;
        }
        console.log(`player score - ${scorePl}, computer score - ${scoreCom}`);
    }

    if (scorePl > scoreCom) {
        console.log('You Win!');
    } else if (scorePl < scoreCom) {
        console.log('You Lose!');
    } else if (scorePl == scoreCom) {
        console.log('Drawn game!');
    }

}

//start game 5 times
game(5);