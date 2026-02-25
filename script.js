const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

addTaskBtn.addEventListener("click", function () {
  addTask();
});

function addTask() {
  const taskText = taskInput.value;

  if (taskText === "") {
    return;
  }

  tasks.push(taskText);

  taskInput.value = "";

  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(function (task, index) {
    const li = document.createElement("li");
    li.textContent = task;
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      tasks.splice(index, 1);
      renderTasks();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}
