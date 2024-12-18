let inputEl=document.querySelector("#guessnumb")
let subtn=document.querySelector("#subtn")
let messageEl=document.querySelector(".message")
let prevguess=document.querySelector("#prevguess")
let remguess=document.querySelector("#remanguess")
let lowhigh=document.querySelector(".loworhig")

let p=document.createElement('p')
let randomNum=parseInt(Math.floor(Math.random()*100+1))
let yourguess=[]
let guesleft=1;
let Playgame=true;

if (Playgame) {
     subtn.addEventListener("click", (e)=>{
          e.preventDefault()
          let guess=parseInt(inputEl.value)
          console.log(guess);
          validation(guess)
          
     })
}

const validation=(guess)=>{
     if (guess<0) {
          alert("please enter more than 0")
     }else if (guess>100) {
          alert("please type less than 100")
     }else{
          yourguess.push(guess)
          if (guess===11) {
               guessNumber(guess)
               console.log("you limit is exced")
               displaymessage(`game over, you limit is excide ${guess}`)
               endgame()
               
          }else{
               checkguess(guess)
               guessNumber(guess)
          }
     }

}

const checkguess=(guess)=>{
     if (guess===randomNum) {
          console.log("congrutulation");
          displaymessage("congrutulation")
          endgame()
          
     }
else if (guess>randomNum) {
     console.log("you guess are too high");
     displaymessage("you guess are too high")
     
}else if (guess<randomNum) {
     console.log("you guess are too low");
     displaymessage("you guess are too low");

     
}
}

const guessNumber=(guess)=>{
     inputEl.value=' '
     prevguess.innerHTML +=`${guess}  `
     guesleft++;
     remguess.innerHTML =`${11-guesleft}`
}

const displaymessage=(message)=>{
     lowhigh.innerHTML=`<h2>${message}</h2>`
}

const endgame=()=>{
     inputEl.value=' '
     inputEl.setAttribute('disabled', ' ')
    p.innerHTML=`<h2 id="newgamebtn">Start a new game</h2>`
     messageEl.appendChild(p)
     Playgame=false
     newgame()
}

const newgame=()=>{
     let newgamebtn=document.querySelector("#newgamebtn")
     newgamebtn.addEventListener("click", (e)=>{
          inputEl.value=' '
           randomNum=parseInt(Math.floor(Math.random()*100+1))
 yourguess=[]
 guesleft=1;
prevguess.innerHTML=' '
remguess = `${11-guesleft}`
inputEl.removeAttribute('disabled')
 Playgame=true;
     })
}