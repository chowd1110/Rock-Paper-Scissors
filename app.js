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
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${userChoice} beats ${computerChoice}. You Win!`;
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    const result = userChoice + computerChoice;
    if (result == 'rs' || result == 'pr' || result == 'sp'){
        win();
    }
    else if (result == 'rp' || result == 'ps' || result == 'sr'){ 
        lose();
    }
    else {
        draw();
    }
}


function main(){
    rock_div.addEventListener('click', function(){
        game('r');
    })

    paper_div.addEventListener('click', function(){
        game('p');
    })

    scissors_div.addEventListener('click', function(){
        game('s');
    })
}

main();