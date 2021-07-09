//Crear nuevo todo
function addTodo() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("input").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("No puede estar vacio");
      } else {
        document.getElementById("todoList").appendChild(li);
        let checkbox = document.createElement("INPUT");
        checkbox.setAttribute("type", "checkbox");
        li.appendChild(checkbox);
      }
};

function clearAllTodos() {
    document.querySelectorAll('input[type="checkbox"]')
        .forEach(el => el.checked = false);
}

function markAllTodos() {
    document.querySelectorAll('input[type="checkbox"]')
        .forEach(el => el.checked = true);
}

function deleteAllTodos() {
    let checkboxes = document.getElementById('todoList');
    while (checkboxes.firstChild) {
        checkboxes.removeChild(checkboxes.lastChild);
      }
}