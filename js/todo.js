const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const impToDoList = document.getElementById("impToDo-list");

const TODOS_KEY = "todos";
const IMP_TODOS_KEY = "impTodos";
let toDos = [];
let impToDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}

function saveImpToDos() {
    localStorage.setItem(IMP_TODOS_KEY, JSON.stringify(impToDos));
}

function importantToDo(event) {
    const div = event.target.parentElement;
    const impToDo = div.textContent.slice(0, -4);
    const impTodoObj = {
        text: impToDo,
        id: Date.now()
    }
    impToDos.push(impTodoObj);
    paintImpToDo(impTodoObj);
    saveImpToDos();
}

function deleteToDo(event) {
    const div = event.target.parentElement;
    div.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(div.id));
    saveToDos();
}

function deleteImpToDo(event) {
    const div = event.target.parentElement;
    div.remove();
    impToDos = impToDos.filter((toDo) => toDo.id !== parseInt(div.id));
    saveImpToDos();
}

function paintImpToDo(impToDo) {
    const div = document.createElement("div");
    const span = document.createElement("span");
    const button = document.createElement("button");

    div.id = impToDo.id;
    span.innerText = impToDo.text;
    button.innerText = "삭제";
    button.addEventListener("click", deleteImpToDo);
    div.appendChild(span);
    div.appendChild(button); 
    impToDoList.appendChild(div);

}

function paintToDo(newToDo) {
    const div = document.createElement("div");
    const span = document.createElement("span");
    const button = document.createElement("button");
    const impButton = document.createElement("button");

    div.id = newToDo.id;
    span.innerText = newToDo.text;
    button.innerText = "삭제";
    impButton.innerText = "중요";
    button.addEventListener("click", deleteToDo);
    impButton.addEventListener("click", importantToDo);
    div.appendChild(span);
    div.appendChild(button); 
    div.appendChild(impButton); 
    toDoList.appendChild(div);

}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newToDo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); 
}