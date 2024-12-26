const quizdata=[
     {
       question: "What does HTML stand for?",
       options: [
         "Hyper Text Markup Language",
         "Hyperlinks and Text Markup Language",
         "Home Tool Markup Language",
         "Hyper Tool Markup Language"
       ],
       answer:0,
     },
     {
       question: "What is the correct way to create a hyperlink in HTML?",
       options: [
         "<a url='http://example.com'>Example</a>",
         "<a src='http://example.com'>Example</a>",
         "<a href='http://example.com'>Example</a>",
         "<link>http://example.com</link>"
       ],
       answer: 2,
     },
     {
       question: "Which HTML tag is used to define an unordered list?",
       options: [
         "<ol>",
         "<li>",
         "<ul>",
         "<dl>"
       ],
       answer: 2,
     },
     {
       question: "What does the <img> tag do in HTML?",
       options: [
         "Defines a paragraph",
         "Defines an image",
         "Defines a line break",
         "Defines a table"
       ],
       answer: 1,
     },
     {
          question: "What does the <br> tag represent in HTML?",
          options: [
            "Break line",
            "Bold text",
            "Background",
            "Block"
          ],
          answer:0,
        },
        {
          question: "Which tag is used to define a table row?",
          options: [
            "<tr>",
            "<td>",
            "<table>",
            "<th>"
          ],
          answer: 0,
        },
     {
       question: "Which attribute is used to specify that an input field must be filled out?",
       options: [
         "required",
         "placeholder",
         "validate",
         "mandatory"
       ],
       answer:0,
     }
   ];

let questionEl=document.querySelector("#question")
let answerEl=document.querySelectorAll(".answer")
let option_1=document.querySelector("#option_1")
let option_2=document.querySelector("#option_2")
let option_3=document.querySelector("#option_3")
let option_4=document.querySelector("#option_4")
let quize=document.querySelector("#quiz")

let btn=document.querySelector("#submit")
let currquiz=0;
let score=0;


const loadquiz=()=>{
  const{question,options}=quizdata[currquiz]
  // console.log(question);
  questionEl.innerHTML=`${question}`

    options.forEach((curoption,index)=> {
        window [`option_${index+1}`].innerText=curoption
        // `option_${value+1}.innerHTML=options`
      });
  
}

loadquiz();

const getselectoption=()=>{
  let answerval=Array.from(answerEl)
  return answerval.findIndex((curelm)=>curelm.checked)
}

const disabledoption=()=>{
  answerEl.forEach((tyu)=>tyu.checked=false)
}

btn.addEventListener("click", ()=>{
  let selectAnswerOption=getselectoption()
  // console.log(selectAnswerOption);
  
if (selectAnswerOption===quizdata[currquiz].answer) {
  score=score+1;
  // console.log(score);
  
}

  currquiz++;
  if (currquiz<quizdata.length) {
    disabledoption()
    loadquiz()
  }else{
    quize.innerHTML=`
    <div class="result">
    <h2> your score: ${score}/${quizdata.length} correct Answer </h2>
    <h4> ✨Congrutulation on completing the quiz✨ </h4>
    <button class="reload-button" onclick="location.reload()">play Again</button>
    </div>
    `
  }
})