let scoreEl=document.querySelector(".score")
let formEl=document.querySelector("form")
let questionEl=document.querySelector(".question")
let  inputEl=document.querySelector(".input")
let btn=document.querySelector(".submit")
let nextques=document.querySelector(".nextques")

let numb1=parseInt(Math.floor(Math.random()*10+1));
let numb2=parseInt(Math.floor(Math.random()*10+1));

questionEl.innerHTML=`What is ${numb1} multiply by ${numb2} ?`;

let answer=numb1*numb2;

formEl.addEventListener("submit", (e)=>{
     e.preventDefault()
     console.log(answer);
     let inptVal=parseInt(inputEl.value)
     console.log(inptVal, typeof(inptVal));
     
     if (inptVal===answer) {
          console.log("your answer is correct");
          scoreEl.innerHTML=`Yehh, Your Answer is Correct: ${answer}`;
          savedata()
     }else{
          scoreEl.innerHTML=`Ooops, Your Answer is Wrong! Correct Ans is: ${answer}`;

     }
          
})

function refreshPage(){
     window.location.reload();
 } 

 