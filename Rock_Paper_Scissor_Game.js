let userScore =0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw! Play again"
    msg.style.backgroundColor = "#08b131"
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats  your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
} 

const playGame = (userChoice) => {
    //generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        //draw game
        drawGame()
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false:true;
        }
        else if (userChoice === "paper")
        {
            userWin = compChoice === "rock" ? true:false;
        }
        else {
            userWin = compChoice === "paper" ? true:false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

// RESET FUNCTIONALITY
const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Play Your move";
    msg.style.backgroundColor = "#081b31";
});

// DARK MODE TOGGLE
const toggleBtn = document.querySelector("#toggle-theme");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
