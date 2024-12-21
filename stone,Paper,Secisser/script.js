let choicess=document.querySelectorAll(".choice")
let message=document.querySelector(".message")
let usermessage=document.querySelector("#userscore")
let compmessage=document.querySelector("#computer")

let userScore=0;
let compScore=0

choicess.forEach((choice)=>{
     console.log("huy");
     choice.addEventListener("click", ()=>{
          let userchoice=choice.getAttribute("id")
          // console.log(userchoice);
          playgame(userchoice)
          
          
     })
})

const genComptChoice=()=>{
     let option=["rock","paper","scissor"]
     let ranidx=Math.floor(Math.random()*3);
     return option[ranidx]
}

const gameDraw=()=>{
     console.log("game was draw");
     message.innerHTML=`Game Was Draw`
     message.style.background="yellow"
     
}
const playgame=(userchoice)=>{
     console.log("userchoice=",userchoice);
     let computer=genComptChoice()
     console.log("comput choice=",computer);


     if (userchoice===computer) {
          gameDraw()
     }else{
          let userWin=true;
          if (userchoice==="rock") {
               userWin=computer ==="paper" ? false : true
          }else if (userchoice==="paper") {
               userWin=computer==="scissor" ?false :true
          }else if (userWin==="scissor") {
               userWin=computer==="rock" ? false :true
          }
          showWinner(userWin,userchoice,computer)
     }
}

const showWinner=(userWin,userchoice,computer)=>{
     if (userWin===true) {
          // console.log(`you are winner ${userchoice} beat computer`);
          userScore++;
          usermessage.innerHTML =userScore
          message.innerHTML=`you are winner, ${userchoice} beat ${computer}`
          message.style.background="green"
          
     }else{
          compScore++
          compmessage.innerHTML =compScore
          console.log(`losser you are ${computer} beat you`);
          message.innerHTML=`Computer is Winner, ${computer} beat ${userchoice}`
          message.style.background="red"
          
     }
}