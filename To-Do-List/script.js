let inputEl=document.querySelector(".inputt")
let subtn=document.querySelector(".btn")
let boxes=document.querySelector(".todo")

subtn.addEventListener("click", (e)=>{
e.preventDefault()
if (inputEl.value==='') {
     alert("please type something")
}else{
     let taskbox=document.createElement('li')
     taskbox.classList.add("task")
     taskbox.innerHTML=`${inputEl.value}`
     boxes.appendChild(taskbox)

     let cross=document.createElement('span')
     cross.classList.add('crossbox')
     cross.innerHTML='\u00d7'
     taskbox.appendChild(cross)
}

saveData()
})

boxes.addEventListener("click", (e)=>{
     if (e.target.tagName==='LI') {
          e.target.classList.toggle('checked')
     }else if (e.target.tagName==='SPAN') {
          e.target.parentElement.remove()
          saveData()
     }
})

// const saveData=()=>{
//      localStorage.setItem('data', inputEl.value)
// }

// const showDate=()=>{
//      inputEl.value=localStorage.getItem('data')
// }
// showDate()