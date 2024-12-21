let btns = document.querySelectorAll('.btn')
let message=document.querySelector(".message")
let resetbtn=document.querySelector(".reset")

const winpattern = [
     [0, 1, 2],
     [0, 3, 6],
     [0, 4, 8],
     [1, 4, 7],
     [2, 5, 8],
     [2, 4, 6],
     [3, 4, 5],
     [6, 7, 8]
];

let turnO = true
btns.forEach((btn) => {
     console.log("helo");
     btn.addEventListener("click", () => {
          console.log("fgt");
          if (turnO === true) {
               btn.innerHTML = '0'
               turnO = false
          } else {
               btn.innerHTML = 'X'
               turnO = true
          }
          btn.disabled=true
          checkwinner()

     })

})

const checkwinner = () => {
     for (let pattern of winpattern) {
          // console.log(pattern[0],pattern[1],pattern[2]);
          // console.log(btns[pattern[0]],btns[pattern[1]],btns[pattern[2]]);
          let pos1val = (btns[pattern[0]].innerHTML);
          let pos2val = (btns[pattern[1]].innerHTML);
          let pos3val = (btns[pattern[2]].innerHTML);

         if (pos1val != "" && pos2val != "" && pos3val !="") {
          if (pos1val ===pos2val && pos2val ===pos3val) {
               console.log("winner");
               

               showwinner(pos1val);

          }
         }
     }
}

     const showwinner=(pos1val)=>{
          message.style.display="block"
          message.innerHTML=`congratulation winner is ${pos1val}`

          Disabledbox()
     }

     const Disabledbox=()=>{
          for (const btn of btns) {
               btn.disabled=true;
          }
     }

     const Enabelbox=()=>{
          turnO=true
          for (let btn of btns) {
               btn.disabled=false
          message.style.display="none"
               btn.innerHTML='a'
          }
     }

resetbtn.addEventListener("click", Enabelbox)