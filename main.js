const inputPlace = document.getElementById("input-box")
const containerClass = document.getElementById("listTerms")

function addButton(){
 if  (inputPlace.value === "") {
   alert("You must write something");
}
else {
    let li = document.createElement("li");
    li.innerHTML =  inputPlace.value;
    containerClass.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputPlace.value = "";
  SaveDocument();
}

containerClass.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){     
        e.target.classList.toggle("marked");
        SaveDocument();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        SaveDocument();
    }
});
function  SaveDocument(){
    localStorage.setItem("Delta", containerClass.innerHTML);
}
function ShowData(){
    containerClass.innerHTML = localStorage.getItem("Delta");
}
ShowData();

