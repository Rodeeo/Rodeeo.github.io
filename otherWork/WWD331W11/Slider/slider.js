function toggleNav() {
    var updateElement = document.getElementById("side-menu");
    //toggle adds a class if it's not there or removes it if it is.
    updateElement.classList.toggle("open");
}