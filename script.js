'use strict';
//game setings
let scoreCom = 0;
let scorePl = 0;
let rounds = null;

//container DOM for game
const gameContainer = document.querySelector('.container');

//begin game - message for player and input for player choice number of rounds
//create new Elements
const messageForPlayer = document.createElement('p');
messageForPlayer.textContent = 'Start game. Choose your number of rounds: ';
const numberOfRounds = document.createElement('input');
numberOfRounds.setAttribute('type', 'text');
//add new Element in DOM
gameContainer.appendChild(messageForPlayer);
gameContainer.appendChild(numberOfRounds);
numberOfRounds.focus();

//get player choice number of rounds and start game
numberOfRounds.addEventListener('change', () => {
    messageForPlayer.textContent = 'Game begin';
    gameContainer.removeChild(numberOfRounds);
    rounds = +numberOfRounds.value;
    //start game
    playRound(gameContainer, rounds);

});

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


function playRound(container, gameLength) {
    let result = '';
    let count = 1;

    //new buttons elements and message elements
    let choiceArray = ['Rock', 'Paper', 'Scissors'];
    const btnArray = [];
    let messageInGameProcess = document.createElement('p');
    let messageForRounds = document.createElement('p');

    //count 
    messageForRounds.textContent = `Round: ${count}`;
    container.appendChild(messageForRounds);

    for (let i = 0; i < choiceArray.length; i++) {

        //create new elements
        btnArray[i] = document.createElement('button');
        btnArray[i].setAttribute('data-info', choiceArray[i]);
        btnArray[i].textContent = `${choiceArray[i]}`;
        container.appendChild(btnArray[i]);

        //game process
        btnArray[i].addEventListener('click', function () {
            let plSel = this.getAttribute('data-info');
            let comSel = computerPlay();



            //define winer
            switch (true) {
                case (plSel == 'Rock' && comSel == 'Paper'):
                    result = "You Lose! Paper beats Rock";
                    break;
                case (plSel == 'Rock' && comSel == 'Scissors'):
                    result = "You Win! Rock beats Scissors";
                    break;
                case (plSel == 'Rock' && comSel == 'Rock'):
                    result = "Drawn game! Rock equal Rock";
                    break;

                case (plSel == 'Paper' && comSel == 'Rock'):
                    result = "You Win! Paper beats Rock";
                    break;
                case (plSel == 'Paper' && comSel == 'Scissors'):
                    result = "You Lose! Scissors beats Paper";
                    break;
                case (plSel == 'Paper' && comSel == 'Paper'):
                    result = "Drawn game! Paper equal Paper";
                    break;

                case (plSel == 'Scissors' && comSel == 'Rock'):
                    result = "You Lose! Rock beats Scissors";
                    break;
                case (plSel == 'Scissors' && comSel == 'Paper'):
                    result = "You Win! Scissors beats Paper";
                    break;
                case (plSel == 'Scissors' && comSel == 'Scissors'):
                    result = "Drawn game! Scissors equal Scissors";
                    break;
            }

            if (result.search('You Win') === 0) {
                scorePl++;
            } else if (result.search('Drawn game') === 0) {
                scoreCom++;
                scorePl++;
            } else if (result.search('You Lose') === 0) {
                scoreCom++;
            }

            //message who winner and about player and computer selection
            messageInGameProcess.textContent = `Player selection - ${plSel} and computer selection - ${comSel}.`;
            messageInGameProcess.textContent += ` ${result}. Player count: ${scorePl}; Computer count: ${scoreCom}`;
            container.appendChild(messageInGameProcess);

            //count
            count++;

            if (count > gameLength) {
                //end game
                container.removeChild(messageForRounds);

                if (scorePl > scoreCom) {
                    messageInGameProcess.textContent = `Player selection - ${plSel} and computer selection - ${comSel}. You Win! Player count: ${scorePl}; Computer count: ${scoreCom}`;
                } else if (scorePl < scoreCom) {
                    messageInGameProcess.textContent = `Player selection - ${plSel} and computer selection - ${comSel}. You Lose! Player count: ${scorePl}; Computer count: ${scoreCom}`;
                } else if (scorePl == scoreCom) {
                    messageInGameProcess.textContent = `Player selection - ${plSel} and computer selection - ${comSel}. Drawn game! Player count: ${scorePl}; Computer count: ${scoreCom}`;
                }

                messageForPlayer.textContent = 'End game!';

            } else {
                messageForRounds.textContent = `Round: ${count}`;
            }

        });

    }
}




