let user_score=0;
let comp_score=0;

const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")

const user_score_para=document.querySelector("#user-score")
const comp_score_para=document.querySelector("#comp-score")

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        
        const user_choice=choice.getAttribute("id")
    
        play_game(user_choice)
    } )
})

const gen_comp_choice=()=>{
    const options=["Rock","Paper","Scissor"]
    const ixd=Math.floor(Math.random()*3)
    return options[ixd];
}

const drawGame=()=>{
    console.log("Game Draw")
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const play_game=(user_choice)=>{
    const comp_choice=gen_comp_choice();
    console.log( "User Choice:",user_choice)
    console.log("Computer Choice:",comp_choice)
    if (user_choice===comp_choice){
        drawGame();
    }
    else{
        let userwin=true;
        if(user_choice==="Rock"){
            userwin=comp_choice==="Paper" ?false:true
            
        }
        else if(user_choice==="Paper"){
            userwin=comp_choice==="Scissor"?false:true

        }
        else if (user_choice==="Scissors"){
            userwin=comp_choice==="Rock"?false:true
        }

        showwinner(userwin,user_choice,comp_choice);



    }
} 

const showwinner=(userwin,user_choice,comp_choice)=>{
    if(userwin===true){
        console.log("You Win")
        user_score++
        user_score_para.innerText=user_score;
        msg.innerText = `You win! Your ${user_choice} beats ${comp_choice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("You Lose");
        comp_score++
        comp_score_para.innerText=comp_score;
        msg.innerText=`You Lose!${comp_choice} beats your ${user_choice}`;
        msg.style.backgroundColor = "red";

    }
}
