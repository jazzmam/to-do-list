// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);


// Functions
function addTodo(event) {
	// Prevent form from submitting	
	event.preventDefault();
	// Todo div
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');
	// li
	const newTodo = document.createElement('li');
	newTodo.innerText = 'ruta';
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);
	// Check as completed button
	const completeButton = document.createElement('button');
	completeButton.innerHTML = '<i class="fas fa-check"></i>';
	completeButton.classList.add("complete-btn");
	todoDiv.appendChild(completeButton);
	// Check delete button
	const deletedButton = document.createElement('button');
	deletedButton.innerHTML = '<i class="far fa-trash-alt"></i>';
	deletedButton.classList.add("complete-btn");
	todoDiv.appendChild(deletedButton);
	// Apend Todo div 
	todoList.appendChild(todoDiv);
}