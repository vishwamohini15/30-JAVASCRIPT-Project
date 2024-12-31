let containerEl = document.querySelector(".container")
let option = ["vishwamohini", "webDevloper", "youtuber", "Infulencer", "freelancer"];

let optionindex = 0;
let charindex = 0;

const updateText = () => {
     charindex++;

     containerEl.innerHTML = `
          <h1>hello 2025, i'm  ${option[optionindex].slice(0,1)==='I' ? "an" : "a"} ${option[optionindex].slice(0, charindex)}</h1>`
     if (charindex === option[optionindex].length) {
          optionindex++
          charindex = 0
     }

     if (optionindex === option.length) {
          optionindex = 0
     }
     setTimeout(updateText, 400);
}
updateText()
