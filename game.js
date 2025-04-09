let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock" , "paper", "scissors"];
    let randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = ()=> {
    msg.innerText = "game was draw . play again.";
    msg.style.background = "black";
};

const showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "you win";
        msg.style.background = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "you loss";
        msg.style.background = "red";
    }
};
const playGame = (userChoice) => {
      console.log("user choice =" , userChoice);
      //Generate computer choice
      const compChoice = genCompChoice();
      console.log("choice was clicked", compChoice );


     if(userChoice===compChoice) {
        //draw game
        drawGame();
     } else{
        let userWin = true;
        if(userChoice==="rock") {
            userWin = compChoice === "paper" ? false : true ;
        }else if(userChoice==="paper") {
            userWin = compChoice === "scissors" ? false : true ;

     }else{
       userWin = compChoice=== "rock"? false : true;
     }
     showWinner(userWin);
}
};

choices.forEach((choice) => {
 choice.addEventListener("click" ,() => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked", userChoice);
    playGame(userChoice);
 });
});
