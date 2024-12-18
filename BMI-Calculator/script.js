let formEl=document.querySelector("form")

formEl.addEventListener("submit", (e)=>{
     let height=parseInt(document.querySelector("#height").value)
     let weight=parseInt(document.querySelector("#weight").value)
     let bmiResult=document.querySelector(".bmi")
     let results=document.querySelector(".result")
     let relsutEL=document.querySelector(".pfirst")
     let reslseco=document.querySelector(".pseco")
     let resthir=document.querySelector(".pthir")


     e.preventDefault();
     console.log(height);
     
     if (height===' ' || height<0 || isNaN(height)) {
          alert("please type a valid number")
     }else if (weight===' ' || weight<0 || isNaN(weight)) {
          alert("type a valid number")
     }else{
          const bmi= (weight / ((height*height)/10000)).toFixed(2)
          console.log(bmi);
          
          bmiResult.innerHTML= `${bmi}`;
          if (bmi<=18) {
               console.log("its vary low");
               relsutEL.classList.add('pone')
               height='';
          }else if (bmi>=19 && bmi<=25) {
               relsutEL.classList.remove('pone')

               reslseco.classList.add('pone')
          }else if (bmi>=26) {
               relsutEL.classList.remove('pone')
               reslseco.classList.remove('pone')

               resthir.classList.add('pone')
          }
     }

})
