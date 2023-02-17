const addButton = document.querySelector('#addTodo');
const deleteButton = document.querySelector('#deleteTodo');
const input = document.querySelector('#inputText');
const toDoContainer = document.querySelector('#toDoContainer');


// Add todo
addButton.addEventListener('click', () => {
    let paragraph = document.createElement('p');
    toDoContainer.appendChild(paragraph);
    paragraph.innerText = input.value;
    input.value = '';


    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration = 'line-through';
    });

    // Delete todo
    paragraph.addEventListener('dblclick', () => {
        toDoContainer.removeChild(paragraph);
    });
});



// Clear All
deleteButton.addEventListener('click', () => {
    toDoContainer.innerHTML = '';
});