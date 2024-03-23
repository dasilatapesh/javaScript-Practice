const mainTodoElem = document.querySelector(".todo-list-elem");
const inputValue =  document.getElementById("inputValue");
//get data from list
const getTodoList = () => {
    return JSON.parse(localStorage.getItem('myTodoList'));
};

//add to localstorage
const addTodoListLocalStorage = (localToDoLists) => {
    console.log(localTodoList);
    return localStorage.setItem('myTodoList', JSON.stringify(localToDoLists));
};

let localTodoList = getTodoList() || [];

//to add data dynamically
const addToDoDynamicElement = (currElem) => {
    const newcurr = currElem[0].toUpperCase() + currElem.slice(1);
    const divElement = document.createElement("div");
    divElement.classList.add("main-todo-div");
    divElement.innerHTML = `<li>${newcurr}</li> <button class="deleteButton">Delete</button>`
    mainTodoElem.appendChild(divElement);
};

//add to list
const addToDoList = (e) => {
    e.preventDefault();
    const myVal = inputValue.value.trim().toLowerCase();

    inputValue.value ="";

    if(myVal != "" && !localTodoList.includes(myVal)){
        localTodoList.push(myVal);
        localTodoList = [...new Set(localTodoList)];
        addTodoListLocalStorage(localTodoList);
        addToDoDynamicElement(myVal);
    }
};

//to display todo list
const showTodoList = () => {
    localTodoList.forEach((currElem)=>{
        addToDoDynamicElement(currElem);
    });
};

showTodoList();

//to delete todo
const removeToDoElem = (e) => {
    const todoRemove = e.target;
    let toDoListContent = todoRemove.previousElementSibling.innerText.toLowerCase();
    let parentElem = todoRemove.parentElement;
    localTodoList = localTodoList.filter((currTodo) =>{
        return currTodo !== toDoListContent;
    });
    addTodoListLocalStorage(localTodoList);
    parentElem.remove();
}

document.querySelector(".btn").addEventListener('click', addToDoList);
mainTodoElem.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.classList.contains('deleteButton')){
        removeToDoElem(e);
    }
});
