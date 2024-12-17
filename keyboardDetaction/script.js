const container=document.querySelector(".container")
window.addEventListener("keydown", (e)=>{
      container.innerHTML= `
          <h1>Press Any Key In Your Keyboard</h1>
     <div class="color">
     <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key ===' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
     </div>
     `
})

