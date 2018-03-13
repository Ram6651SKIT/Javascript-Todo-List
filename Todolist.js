function todoList(){
  
  var input=document.getElementById("inputtext").value;
  document.getElementById("inputtext").value=" ";
  var text=document.createTextNode(input);
  var newItem=document.createElement("li");
  newItem.appendChild(text);
  document.getElementById("ultodos").appendChild(newItem);
  
}