var todoList = document.getElementById("todoList");
var doneList = document.getElementById("doneList");

function add() {
    var item = document.getElementById("newTodo").value;
    var itemTxt = document.createTextNode(item);
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    var btn = document.createElement("button");
    var btnx = document.createTextNode("x");
    btn.setAttribute("onclick", "remove()");
    btn.appendChild(btnx);
    checkbox.setAttribute("onclick", "complete()");
    li.appendChild(checkbox);
    li.appendChild( document.createTextNode( '\u00A0' ) );
    li.appendChild(itemTxt);
    li.appendChild( document.createTextNode( '\u00A0' ) );
    li.appendChild(btn);
    todoList.appendChild(li);
    localStorage["list.a"] = toDoList.innerHTML;
  }

function complete() {
  var task = this.event.currentTarget.parentNode;
  if(task.style.backgroundColor === "lightgreen"){
    task.style.backgroundColor = null;
    todoList.appendChild(task);
    doneList.removeChild(task);
  }
  else{
    task.style.backgroundColor = "lightgreen";
    todoList.removeChild(task);
    doneList.appendChild(task);
  }
  localStorage["list.a"] = todoList.innerHTML;
  localStorage["list.b"] = doneList.innerHTML;
}

function remove() {
  var task = this.event.currentTarget.parentNode;
  event.currentTarget.parentElement.remove();
  localStorage["list.a"] = todoList.innerHTML;
  localStorage["list.b"] = doneList.innerHTML;
}

function showTodo() {
  var x = document.getElementById("todoList");
  var y = document.getElementById("doneList");

  if (x.style.display === "none") {
    x.style.display = "block";
  }

  y.style.display = "none";

}

function showCompletedTodo() {
  var x = document.getElementById("todoList");
  var y = document.getElementById("doneList");

  if (y.style.display === "none") {
    y.style.display = "block";
  }

  x.style.display = "none";
}

function showAll() {
  var x = document.getElementById("todoList");
  var y = document.getElementById("doneList");

  if (x.style.display === "none") {
      x.style.display = "block";
  }
  if (y.style.display === "none") {
      y.style.display = "block";
  }
}

if (localStorage["list.a"]) {
    todoList.innerHTML = localStorage["list"];
  }
  
  if (localStorage["list.b"]) {
    doneList.innerHTML = localStorage["list1"];
  }