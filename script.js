let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    const taskDate = document.getElementById('taskDate').value;
    const taskTime = document.getElementById('taskTime').value;

    if (taskText !== '') {
        const newTask = {
            id: Date.now(),
            text: taskText,
            date: taskDate,
            time: taskTime
        };
        tasks.push(newTask);
        taskInput.value = '';
        displayTasks();
    }
}

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="bold-text">${task.text}</span>
            <span class="bold-text">${task.date}</span>
            <span class="bold-text">${task.time}</span>
            <button class="edit-btn" onclick="editTask(${task.id})"><i class="fas fa-pencil-alt"></i></button>
            <button class="delete-btn" onclick="deleteTask(${task.id})"><i class="fas fa-times"></i></button>
        `;
        taskList.appendChild(li);
    });
}

displayTasks();
