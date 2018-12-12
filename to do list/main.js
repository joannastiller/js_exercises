const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItem = document.getElementsByClassName('task');
const input = document.querySelector('input');

const removeTask = e() => {
    e.target.parentNode.remove();
    taskNumber.textContent = listItem.length;
}

const addTask = (e) => {
    e.preventDefault();
    const taskName = input.value;
    if (taskName === "") return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = taskName + '<button>remove</button>';
    ul.appendChild(task);
    input.value = '';
    taskNumber.textContent = listItem.length;
    task.querySelector('button').addEventListener('click', removeTask);
}

form.addEventListener('submit', addTask)