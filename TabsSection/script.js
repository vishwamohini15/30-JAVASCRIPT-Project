const tabs=document.querySelector(".tabs")
const btns=document.querySelectorAll(".button")
const articles=document.querySelectorAll(".content")


tabs.addEventListener("click", (event)=>{
console.log(event.target.dataset.id);
let id=event.target.dataset.id

if (id) {
     btns.forEach((btn)=>{
          btn.classList.remove("live")
     })
     event.target.classList.add("live")
     articles.forEach((articl)=>{
          articl.classList.remove("live")
     })

     const element=document.getElementById(id)
     element.classList.add("live")
}


})