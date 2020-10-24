    const LOCAL_STORAGE_TODO_LIST = "LOCAL_STORAGE_TODO_LIST";

    const listElement = document.getElementById("todo-list");

    function saveList(list) {
      localStorage.setItem(LOCAL_STORAGE_TODO_LIST, JSON.stringify(list));
    }

    function readList() {
      try {
        let value = localStorage.getItem(LOCAL_STORAGE_TODO_LIST);
        let data = JSON.parse(value);
        return data;
      } catch (err) {
        alert(err);
      }
    }

    function clearList() {
      localStorage.removeItem(LOCAL_STORAGE_TODO_LIST);
    }

    function addTodoToList(todo) {

      let todos = readList();
      todos.append(todo);
      saveList(todos);
    }

    function populateListElement() {
      let todos = readList();

      todos.forEach((todo) => {
        let todoElement = document.createElement("li");

        let checkmark = ' ';

        if (todo.is_completed) {
          checkmark = 'X'
        }

        todoElement.appendChild(document.createTextNode(todo.name + ': [' + checkmark + ']'));
        listElement.appendChild(todoElement)
      });
    }

