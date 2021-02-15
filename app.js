// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
document.addEventListener('DOMContentLoaded', getLocalStorageTodos);
todoInput.addEventListener('input', enableSubmission);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheckTodo);

function enableSubmission() {
	todoButton.classList.add('enabled');
}

// Functions
function addTodo(event) {
	// Prevent form from submitting	
	event.preventDefault();

	// Todo div
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');
	// li
	const newTodo = document.createElement('li');

	if (todoInput.value) {
		console.log('has value');
	
		newTodo.innerText = todoInput.value;
		newTodo.classList.add('todo-item');
		todoDiv.appendChild(newTodo);
	}

	// Remove enabled class from input button
	todoButton.classList.remove('enabled');

	// Save to local storage
	saveLocalStorageTodos(todoInput.value);
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

	// Remove from local storage
	removeLocalStorageTodos(todo);

	// Mark as complete todo
	if (clickedItem.classList[0] === 'complete-btn') {
		todo.classList.toggle('completed');
	}
}

function saveLocalStorageTodos(todo) {
	// Checking if a todo is already in local storage
	let todos;
	if(localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}
	todos.push(todo);
	localStorage.setItem('todos', JSON.stringify(todos));
}

function getLocalStorageTodos() {
	// Checking if a todo is already in local storage
	let todos;
	if(localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}
	localStorage.setItem('todos', JSON.stringify(todos));

	todos.forEach(function(todo){
		// Todo div
		const todoDiv = document.createElement('div');
		todoDiv.classList.add('todo');
		// li
		const newTodo = document.createElement('li');
		newTodo.innerText = todo;
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

	});
}

function removeLocalStorageTodos(todo) {
	// Checking if a todo is already in local storage
	let todos;
	if(localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}

	todoIndex = todo.children[0].innerText;
	todos.splice(todos.indexOf(todoIndex), 1);

	localStorage.setItem('todos', JSON.stringify(todos));
}