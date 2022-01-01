let submit = document.getElementById('submit')
let text1 = document.getElementById('text1');
let checke = document.getElementById('checke')
let deletebtn = document.getElementById('deletebtn')
var editbtn = document.getElementById('edite')

submit.addEventListener("click", function() {
    

    
    var entred = document.getElementById('entred').value
    let hi = document.createElement('h1')
    hi.textContent = entred
    text1.appendChild(hi)

     if (entred=="")
    {
        alert("Please Enter Ur To Do List")
    }
    
    else {
    var checkbox = document.createElement('button')
    
    checkbox.textContent = "Finish"
    checkbox.style.backgroundColor = "burlywood";
    checkbox.style.padding =  "12px";
    checkbox.style.marginTop = "-16px"
    checkbox.style.border = "0";
    checkbox.style.display = "block";
    checkbox.style.marginBottom = "45px";
    checkbox.style.cursor = "pointer";
     
  

    
    checke.appendChild(checkbox);
 
     
    
  
    var Finish = document.createElement("h2")

    checkbox.addEventListener("click", function() {
        hi.style.textDecorationLine = "line-through"
        hi.style.color="#2b3a39"
        
    })

    var deletee = document.createElement('button')
    
    deletee.textContent = "delete"
    deletee.style.backgroundColor = "burlywood";
    deletee.style.padding =  "12px";
    deletee.style.marginTop = "-16px"
    deletee.style.border = "0";
    deletee.style.display = "block";
    deletee.style.marginBottom = "45px";
    deletee.style.cursor = "pointer";
    deletebtn.appendChild(deletee)

     
   

    var edite = document.createElement('button')
    
    edite.textContent = "Edit"
    edite.style.backgroundColor = "burlywood";
    edite.style.padding =  "12px";
    edite.style.marginTop = "-16px"
    edite.style.border = "0";
    edite.style.display = "block";
    edite.style.marginBottom = "45px";
    edite.style.cursor = "pointer";
    editbtn.appendChild(edite)
    
    edite.addEventListener("click", () => {
        // selectedRow = hi.parentElement;

        var entred = document.getElementById('entred').value;
        edite.textContent = "Save"
        editbtn.appendChild(edite)
    
    hi.textContent = entred
   

        // document.getElementById('entred').value = selectedRow.textContent;
        
    })

    deletee.addEventListener("click", () => {
        checkbox.parentNode.removeChild(checkbox);
        deletee.parentNode.removeChild(deletee);
        edite.parentNode.removeChild(edite)
        hi.parentNode.removeChild(hi)

    })


}
       
   
    

   
})
 

