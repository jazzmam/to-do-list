// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheckTodo);

// Functions
function addTodo(event) {
	// Prevent form from submitting	
	event.preventDefault();
	// Todo div
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');
	// li
	const newTodo = document.createElement('li');
	newTodo.innerText = todoInput.value;
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);
	// Check as completed button
	const completeButton = document.createElement('button');
	completeButton.innerHTML = '<i class="fas fa-check"></i>';
	completeButton.classList.add('complete-btn');
	todoDiv.appendChild(completeButton);
	// Check delete button
	const deleteButton = document.createElement('button');
	deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
	deleteButton.classList.add("delete-btn");
	todoDiv.appendChild(deleteButton);
	// Apend Todo div 
	todoList.appendChild(todoDiv);
	// Clear Todo input value
	todoInput.value = '';
}

function deleteCheckTodo(event) {
	const clickedItem = event.target;
	const todo = clickedItem.parentElement; 
	// Delete todo
	if (clickedItem.classList[0] === 'delete-btn') {
		todo.remove();
	}

	// Delete todo
	if (clickedItem.classList[0] === 'complete-btn') {
		todo.classList.toggle('completed');
	}
}