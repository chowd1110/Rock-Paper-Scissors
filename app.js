let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter == 'r') {
        return 'Rock';
    } 
    else if (letter =='p') {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You Win!`;
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('green-border');
    setTimeout(() => userChoice_div.classList.remove('green-border'), 300);
}

function lose (userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You've lost.`;
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('red-border');
    setTimeout(() => userChoice_div.classList.remove('red-border'), 300);
}

function draw(userChoice, computerChoice){
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. That's a draw.`;
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('gray-border');
    setTimeout(() => userChoice_div.classList.remove('gray-border'), 300);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    const result = userChoice + computerChoice;
    if (result == 'rs' || result == 'pr' || result == 'sp'){
        win(userChoice,computerChoice);
    }
    else if (result == 'rp' || result == 'ps' || result == 'sr'){ 
        lose(userChoice, computerChoice);
    }
    else {
        draw(userChoice, computerChoice);
    }
}


function main(){
    rock_div.addEventListener('click', () => game('r'));

    paper_div.addEventListener('click', () => game('p'));
    
    scissors_div.addEventListener('click', () => game('s'));
}

main();