let formEl=document.querySelector("form")

formEl.addEventListener("click", (e)=>{
     let height=document.querySelector("#height").value
     let weight=document.querySelector("#weight").value

     if (height.value=" " && height<0) {
          console.log("no");
          
     }

})
