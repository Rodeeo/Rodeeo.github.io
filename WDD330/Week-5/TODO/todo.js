let todos = null;
const defaultTodos = [
  { text: 'Be Happy', done: true },
  { text: 'Procrastinate', done: true },
  { text: 'Do Homework', done: false },
  { text: 'Repeat', done: false }
];
/* selectors */
const todosElement = document.getElementById('todos');
const allElement = document.getElementById('filter-all');
const activeElement = document.getElementById('filter-active');
const completeElement = document.getElementById('filter-complete');
const todoFormElement = document.getElementById('todo-form');
const todoInputElement =  document.getElementById('todo-input');
const todoItemElements = document.getElementsByClassName('todo-item');
const todoStatElement = document.getElementById('todos-stat'); 

    
function renderTodoItems () {
  todosElement.innerHTML = ''
  todos.forEach((todo, todoIndex) => {
    todosElement.innerHTML += `
      <div class="todo-item" data-todo_index="${todoIndex}">
      <input type="checkbox" class="todo-status" ${todo.done} ? 'checked' : ''} data-todo_index="${todoIndex}">
      <span class="todo-text" data-todo_index="${todoIndex}">${todo.text}</span>
      <input type="button" value="X" class="todo-delete" data-purpose="delete" data-todo_index="${todoIndex}">
    </div>`
  })
}

function renderActiveItems () {
  todosElement.innerHTML = ''
  todos.forEach((todo, todoIndex) => {
    todosElement.innerHTML += `
      <div> <input type="checkbox" class="todo-status" ${todo.done ? 'checked' : ''} data-todo_index="${todoIndex}">
    </div>`
  })
}

function renderCompleteItems () {
  var todos = todo.filter(todo => todo.done)
  todosElement.innerHTML = ''
  todos.forEach((todo, todoIndex) => {
    todosElement.innerHTML += `
      <div class="todo-item" data-todo_index="${todoIndex}">
      <input type="checkbox" class="todo-status" ${todo.done ? 'checked' : ''} data-todo_index="${todoIndex}">
      <span class="todo-text" data-todo_index="${todoIndex}">${todo.text}</span>
      <input type="button" value="X" class="todo-delete" data-purpose="delete" data-todo_index="${todoIndex}">
    </div>`
  })
}

function renderStats () {
  const allCount = todos.length
  const todoCount = todos.filter(todo => !todo.done).length
  const doneCount = todos.filter(todo => todo.done).length

  todosElement.innerHTML = `
  <div id= "todos"> 
  <div class="status selected-tab" id="filter-all">
  <input type="button" value= "All: ${allCount}"> </div>
  <div class="status" id="filter-active">
  <input type="submit" value= "Todo: ${todoCount}"> </div>
  <div class="status" id="filter-complete">
  <input type="submit" value= "Done: ${doneCount}"> </div>
  </div>`
}

function buildAllButton() {
  const allCount = todos.length
  const allButton = document.createElement('button');
  allElement.innerHTML = ` <div class="tab selected-tab" id="filter-all">
  <input type="button" value= "All: ${allCount}"> </div>
 ` ;
 allElement.addEventListener('click', () => {
    this.renderTodoItems();
  });
}

function buildActiveButton() {
  const todoCount = todos.length
  const ActiveButton = document.createElement('button');
  activeElement.innerHTML = ` <div class="tab" id="filter-active">
  <input type="submit" value= "Todo: ${todoCount}"> </div>
 ` ;
 activeElement.addEventListener('click', () => {
    this.renderActiveItems();
  });
}

function buildCompleteButton() {
  const doneCount = todos.length
  const CompleteButton = document.createElement('button');
  completeElement.innerHTML = ` <div class="tab" id="filter-complete">
  <input type="submit" value= "Done: ${doneCount}"> </div>
 ` ;
 completeElement.addEventListener('click', () => {
    this.renderCompleteItems();
  });
}

function updateTodo () {
  showTodos()
  renderStats()
  renderTodoItems()
  buildAllButton()
  buildActiveButton()
  buildCompleteButton()
}

function addTodo (text) {
  todos.push({ text, done: false })
  todoInputElement.value = ''
  updateTodo()
}
// add todo to Local Storage
function showTodos () {
  window.localStorage.setItem('my_todo-items', JSON.stringify(todos))
}

// pull from Local Storage
function setupTodos () {
  let storedTodos = window.localStorage.getItem('my_todo-items')

  if (storedTodos) {
    todos = JSON.parse(storedTodos)
  } else {
    todos = defaultTodos
  }
  updateTodo()
}

function toggleTodoStatus (index) {
  todos[index].done = !todos[index].done
  updateTodo() 
}

function removeTodo(index) {
  todos.splice(index, 1)
  updateTodo()
}

// event listeners and triggers
todoFormElement.addEventListener('submit', (event) => {
  event.preventDefault();

  const todoText = todoInputElement.value;

  addTodo(todoText);
});

// function filterBy(category) {
// 	console.log('filterBy invoked');
// 	switch(category) {
// 		case 'filter-active':
// 			category = false;
// 			break;
// 		case 'filter-complete':
// 			category = true;
// 			break;
// 		case 'filter-all':
// 			category = null;
// 			break;
// 	}
// 	return category;
// }

todosElement.addEventListener('click', (e) => {
  const { todo_index, purpose } = e.target.dataset

  // ignore click event if no todo item was actually clicked
  if (!todo_index) return

  // toggle todo item status if there's no purpose (edit/delete) detected
  if (!purpose) {
    toggleTodoStatus(todo_index)
  } else {
    // delete todo item if purpose was to delete or initiate edit todo item if purpose was to edit
    if (purpose === 'delete') {
      removeTodo(todo_index)
    } else if (purpose === 'edit') {
      initEdit(todo_index)
    }
  }
})

setupTodos()