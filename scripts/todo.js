const todoList = []

function addToTodo() {
    todoList.push(todoInput.value)
    insertItems();
}

function deleteItem(index) {
    todoList.splice(index, 1)
    insertItems();
}

function insertItems() {
    res.innerHTML = ""

    todoList.forEach((todo, i) => {
        res.innerHTML += `<div>${i + 1}) ${todo} <span class="delete" onclick="deleteItem(${i})">ⓧ</span></div>`
    });
}