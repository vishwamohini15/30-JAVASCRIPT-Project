let inputEl=document.querySelector(".input")

console.log(inputEl.checked);
let bodyEl=document.querySelector("body")

inputEl.checked=JSON.parse(localStorage.getItem("mode"));

updatebody()
function updatebody(){
     if (inputEl.checked) {
          bodyEl.style.background="black"
     }else{
          bodyEl.style.background="white"

     }
}

inputEl.addEventListener("click", ()=>{
     updatebody()
     updatelocalstroge()
})

function updatelocalstroge(){
     localStorage.setItem("mode", JSON.stringify(inputEl.checked))
}