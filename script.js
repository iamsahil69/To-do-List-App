var addBtn = document.querySelector(".Add-btn");
var inputBox = document.querySelector(".input-box");
var addTaskBtn = document.querySelector(".addTaskBtn");
var input = document.querySelector("input");
var ul = document.querySelector("ul");

function getTasks(){
var list = document.querySelectorAll("li");
list.forEach( (listitem) => {
     listitem.addEventListener( "click", (e) => {
        ul.removeChild(listitem);
     });
});
}
getTasks();
addBtn.addEventListener("click", (e) => {
addBtn.style.display="none";
inputBox.style.display="block";
input.value = "";
});

addTaskBtn.addEventListener("click", (e) => {

var input = document.querySelector("input").value;
addBtn.style.display="inline-block";
inputBox.style.display="none";
if(input===""){
alert("Please enter task and then add it!");
} else{
var listItem = document.createElement("li");
var task = document.createTextNode(input);
listItem.appendChild(task);
ul.appendChild(listItem);
getTasks();
}
});


