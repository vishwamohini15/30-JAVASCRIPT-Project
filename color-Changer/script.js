let btns=document.querySelectorAll(".btn")
let containerEl=document.querySelector(".container")


btns.forEach((btn)=>{
btn.addEventListener("click", (e)=>{
// console.log(e.target.id);
if (e.target.innerHTML==="RED") {
     containerEl.style.backgroundColor=e.target.id;
}else if (e.target.innerHTML==="GREEN") {
     containerEl.style.backgroundColor=e.target.id;
     
}else if (e.target.innerHTML==="YELLOW") {
     containerEl.style.backgroundColor="yellow"

}else if (e.target.innerHTML==="PINK") {
     containerEl.style.backgroundColor="pink"

}else if (e.target.innerHTML==="BLUE") {
     containerEl.style.backgroundColor="blue"

}

})
     
})