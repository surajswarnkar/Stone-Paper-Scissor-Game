let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const container = document.querySelector(".msg-container");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const drawGame = () => {
    msg.innerText = "The Game was Draw";
    container.style.backgroundColor = "#ffff";

}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `You Win ${userChoice} beats ${compChoice}`;
        container.style.backgroundColor = "green";
        userScore++;
        userScorepara.innerText = userScore;
    }
    else {
        msg.innerText = `You Lose ${compChoice} beats ${userChoice}`;
        container.style.backgroundColor = "red";
        container.style.color = "Black";
        compScore++;
        compScorepara.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    const compChoice = gencompchoice();
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "secissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
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