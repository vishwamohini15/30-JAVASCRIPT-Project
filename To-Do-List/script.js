let inputEL=document.querySelector(".inputt")
let btn=document.querySelector(".btn")
let  taskbox=document.querySelector(".todo")

btn.addEventListener("click", (e)=>{
     e.preventDefault()
     console.log(inputEL.value);
     if (inputEL.value==='') {
          alert("please type something")
     }else{
          let libox=document.createElement('li')
          libox.classList.add('list')
          libox.innerHTML +=`${inputEL.value}`
          taskbox.appendChild(libox)

          let spanEl=document.createElement("span")
          spanEl.classList.add("spanbox")
          spanEl.innerHTML="\u00d7"
          libox.appendChild(spanEl)
     }
     inputEL.value=' '
     saveData()
})

taskbox.addEventListener("click", (e)=>{
     if (e.target.tagName==='LI') {
          e.target.classList.toggle('checked')
          saveData()
     }else if (e.target.tagName==='SPAN') {
          e.target.parentElement.remove()
          saveData()
     }
})

const saveData=()=>{
     localStorage.setItem("data", taskbox.innerHTML)
}

const showData=()=>{
     taskbox.innerHTML=localStorage.getItem("data")
}

showData()