const buttons = document.querySelectorAll('#choices button');
const container = document.querySelector('#container');
const scoreboard = document.querySelector('#scoreboard');
    
const resultText = document.createElement('p');
const computerText = document.createElement('p');
const scoreText = document.createElement('p');
const winnerText = document.createElement('p');

let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    const play = ['rock','paper','scissors'];
    let random = Math.floor(Math.random()*play.length);
    let randomPlay = play[random];
    return randomPlay;
}

function scoreTextFunction(){
    scoreText.textContent = "Player score: " + (playerScore) + " Computer Score: " + (computerScore);
    container.appendChild(scoreText);
}

function playtoFive(){
    if (playerScore === 5 && computerScore < 5){
        winnerText.textContent = "You win!"
        container.appendChild(winnerText)
        playerScore = 0;
        computerScore = 0;
    }
    else if(computerScore === 5 && playerScore < 5){
        winnerText.textContent = "You lose!"
        container.appendChild(winnerText);
        playerScore = 0;
        winnerScore = 0;
    }
    else{
        winnerText.textContent = ""
        container.appendChild(winnerText)
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', playRound)
});

function playRound(event) {
    
    const playerSelection = event.target.id;
    const computerSelection = computerPlay();
    const computerOutput = computerText.textContent = "The computer's choice is " + (computerSelection) + ".";
    const computerAppend = container.appendChild(computerText);
    const resultAppend = container.appendChild(resultText);

    if (playerSelection === computerSelection){
        computerOutput;
        computerAppend;
        resultText.textContent = "It's a tie!";
        resultAppend;
        scoreTextFunction();
        playtoFive();
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper'){
        computerOutput;
        computerAppend;
        resultText.textContent = "You lose! Paper beats rock.";
        resultAppend;
        computerScore = ++computerScore;
        scoreTextFunction();
        playtoFive();
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        computerOutput;
        computerAppend;
        resultText.textContent = "You win! Rock beats scissors.";
        resultAppend;
        playerScore = ++playerScore;
        scoreTextFunction();
        playtoFive();
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        computerOutput;
        computerAppend;
        resultText.textContent = "You win! Paper beats rock.";
        resultAppend;
        playerScore = ++playerScore;
        scoreTextFunction();
        playtoFive();
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        computerOutput;
        computerAppend;
        resultText.textContent = "You lose! Scissors beats paper.";
        resultAppend;
        computerScore = ++computerScore;
        scoreTextFunction();
        playtoFive();
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        computerOutput;
        computerAppend;
        resultText.textContent = "You lose! Rock beats scissors.";
        resultAppend;
        computerScore = ++computerScore;
        scoreTextFunction();
        playtoFive();
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        computerOutput;
        computerAppend;
        resultText.textContent = "You win! Scissors beats paper.";
        resultAppend;
        playerScore = ++playerScore;
        scoreTextFunction();
        playtoFive();
    }
    else {
    resultText.textContent = "Uh oh! Something went wrong.";
    container.appendChild(resultText);
    }
}