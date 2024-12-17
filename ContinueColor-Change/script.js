let containerEL=document.querySelector(".container")
let btns=document.querySelectorAll(".btn")

const random=()=>{
 let hexcolor="0123456789ABCDEF";
 let color="#"
 for (let i = 0; i < 6; i++) {
 color += hexcolor[Math.floor(Math.random()*16)]
 }
     return color;
}


let interval;

     btns.forEach((btn)=>{
          btn.addEventListener("click", (e)=>{
               console.log("hello");
               if (e.target.innerHTML==="START") {
                 interval= setInterval(() => {
                         containerEL.style.backgroundColor=random()               
                                 console.log(random());
                                 
                            }, 1000);
               }else if (e.target.innerHTML==="STOP") {
                 clearInterval(interval)                           
                    
               }
              
          })
          })