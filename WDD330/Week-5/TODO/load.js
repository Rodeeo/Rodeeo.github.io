let todos;
const defaultTodos = [
  { text: 'Be Happy', done: true },
  { text: 'Procrastinate', done: true },
  { text: 'Do Homework', done: false },
  { text: 'Repeat', done: false }
];
let todoItemIndexInEdit = null;
const currentEdit = {};

/* selectors */
const todosElement = document.getElementById('todos');
const todoFormElement = document.getElementById('todo-form');
const todoInputElement =  document.getElementById('todo-input');
const todoItemElements = document.getElementsByClassName('todo-item')
const todoStatElement = document.getElementById('todos-stat')

function renderTodoItems () {
  todosElement.innerHTML = ''

  todos.forEach((todo, todoIndex) => {
    todosElement.innerHTML += `<div class="todo-item" data-todo_index="${todoIndex}">
      <input type="checkbox" class="todo-status" ${todo.done ? 'checked' : ''} data-todo_index="${todoIndex}">
      <span class="todo-text" data-todo_index="${todoIndex}">${todo.text}</span>
      <input type="button" value="X" class="todo-delete" data-purpose="delete" data-todo_index="${todoIndex}">
    </div>`
  })
}

function renderStats () {
  const todosCount = todos.length
  const pendingCount = todos.filter(todo => !todo.done).length
  const doneCount = todos.filter(todo => todo.done).length

  todoStatElement.innerHTML = `<span>Total: ${todosCount}</span>
  <span>Todo: ${pendingCount}</span>
  <span>Done: ${doneCount}</span>`
}

function updateTodo () {
  showTodos()
  renderTodoItems()
  renderStats()
}

function addTodo (text) {
  todos.push({ text, done: false })
  todoInputElement.value = ''
  updateTodo()
}

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

// add todo to Local Storage
function showTodos () {
  window.localStorage.setItem('my_todo-items', JSON.stringify(todos))
}

// event listeners and triggers
todoFormElement.addEventListener('submit', (event) => {
  event.preventDefault();

  const todoText = todoInputElement.value;
  addTodo(todoText);
});

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