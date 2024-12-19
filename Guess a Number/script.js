let inputEl = document.querySelector("#guessnumb")
let subtn = document.querySelector("#subtn")
let messageEl = document.querySelector(".message")
let prevguess = document.querySelector("#prevguess")
let remguess = document.querySelector("#remanguess")
let lowhigh = document.querySelector(".loworhig")

let p = document.createElement('p')
let randomNum = parseInt(Math.floor(Math.random() * 100 + 1))
let yourguess = []
let guesleft = 1;
let Playgame = true;

if (Playgame) {
     subtn.addEventListener("click", (e) => {
          e.preventDefault()
          let guess = parseInt(inputEl.value)
          console.log(guess);

          validation(guess)

     })
}

const validation = (guess) => {
     if (isNaN(guess)) {
          alert("type valid number");

     } else if (guess <= 0) {
          alert("type valid number");

     } else if (guess >= 100) {
          alert("type valid number");

     } else {
          yourguess.push(guess);
          if (guesleft === 11) {
               displayguess(guess)
               displaymessage(`your game is over, random number is ${randomNum}`)
               endgame()
          } else {
               displayguess(guess)
               checkguess(guess)
          }
     }
}

const checkguess = (guess) => {
     if (guess === randomNum) {
          displaymessage('congratulation, you guessed it right✨✴-')
          endgame();
     } else if (guess > randomNum) {
          displaymessage(`your guesses is too HIGH, please chosse lower value`)

     } else if (guess < randomNum) {
          displaymessage("your guesses is too LOW, please chosse Higher value")

     }
}

const displayguess = (guess) => {
     inputEl.value = ' '
     prevguess.innerHTML += `${guess},    `
     guesleft++;
     remguess.innerHTML = `${11 - guesleft}`
}

const displaymessage = (message) => {
     lowhigh.innerHTML = `<h4>${message}</h4>`
}

const endgame = () => {
     inputEl.value = ' '
     inputEl.setAttribute('disabled', ' ')
     p.innerHTML = `<h2 id="newbtn">New Game</h2>`
     messageEl.appendChild(p)
     Playgame = false;
     newgame()
}

const newgame = () => {
     let newgamebtn = document.querySelector("#newbtn")
     newgamebtn.addEventListener("click", (e) => {

          let randomNum = parseInt(Math.floor(Math.random() * 100 + 1))
          yourguess = []
          guesleft = 1;
          prevguess.innerHTML = ' '
          lowhigh.innerHTML = ' '
          remguess.innerHTML = `${11 - guesleft}`
          inputEl.removeAttribute('disabled')
          messageEl.removeChild(p)
          Playgame = true;
     })
}