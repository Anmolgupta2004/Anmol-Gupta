let userScore =0;
let comScore =0;
let choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const me=document.querySelector("#me");
const computer=document.querySelector("#computer");

const gencomputerchoice =()=>{
    const options=["stone","paper","scissors"];
  const random= Math.floor(Math.random()*3);
  return options[random];
}
const drawGame=()=>{
    console.log("Game is draw");
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor = "blue";
}
const showwinner=(userwin ,userchoice, comchoice)=>{
    if(userwin){
        userScore++;
        me.innerText=userScore;
    console.log("you win!");
    msg.innerText='you win!';
    msg.style.backgroundColor="Green";

    }else{
        comScore++;
        computer.innerText=comScore;
        console.log("you loss");
        msg.innerText="you lose!";
        msg.style.backgroundColor = "Red";
    }

}

const playGame=(userchoice)=>{
    console.log("user-choice = ",userchoice);
    const comchoice=gencomputerchoice();
    console.log("comchoice= ",comchoice);

    if(userchoice==comchoice){
        drawGame();
    }else{
        let userwin;
        if(userchoice=="stone"&& comchoice=="paper"){
            userwin=false;
        }
        else if(userchoice=="stone"&& comchoice=="scissors"){
            userwin=true;
        }
        else if(userchoice=="paper"&& comchoice=="stone"){
            userwin=true;
        }
        else if(userchoice=="paper"&& comchoice=="scissors"){
            userwin=false;
        }
        else if(userchoice=="scissors"&&comchoice=="stone"){
            userwin=false;
        }
        else if(userchoice=="scissors"&&comchoice=="paper"){
            userwin=true;
        }
           
            showwinner(userwin);
    
        }
       
    }
   



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice =choice.getAttribute("id");
        playGame(userchoice);
// console.log("choice was clicked" , userchoice);
});
});
