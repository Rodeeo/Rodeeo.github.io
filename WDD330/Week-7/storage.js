const editBtn = document.getElementById('editBtn');
const editables = document.querySelectorAll('#title, #author, #words');
const notestorage = [];

  if (typeof(Storage) !== "undefined") {
  if (localStorage.getItem('title') !== null) {
    editables[0].innerHTML = localStorage.getItem('title');
  }
  if (localStorage.getItem('author') !== null) {
    editables[1].innerHTML = localStorage.getItem('author');
  }
  if (localStorage.getItem('words') !== null) {
    editables[2].innerHTML = localStorage.getItem('words');
  }
}

editBtn.addEventListener('click', function(e) {
  if (!editables[0].isWordsEditable) {
    editables[0].wordsEditable = 'true';
    editables[1].wordsEditable = 'true';
    editables[2].wordsEditable = 'true';
    editBtn.innerHTML = 'Save Changes';
    editBtn.style.backgroundColor = '#6F9';
  } else {
    // Disable Editing
    editables[0].wordsEditable = 'false';
    editables[1].wordsEditable = 'false';
    editables[2].wordsEditable = 'false';
    // Change Button Text and Color
    editBtn.innerHTML = 'Enable Editing';
    editBtn.style.backgroundColor = '#F96';
    // Save the data in localStorage 
    for (var i = 0; i < editables.length; i++) {
      localStorage.setItem(editables[i].getAttribute('id'), editables[i].innerHTML);
    }
  }
});

setInterval(function() {
  for (var i = 0; i < editables.length; i++) {
    localStorage.setItem(editables[i].getAttribute('id'), editables[i].innerHTML);
  }
}, 5000);