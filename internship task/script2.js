const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const pendingTasksList = document.getElementById("pendingTasksList");
const completedTasksList = document.getElementById("completedTasksList");

addTaskButton.addEventListener("click", function() {
  const taskText = taskInput.value;
  const taskElement = document.createElement("li");
  taskElement.textContent = taskText;
  taskElement.addEventListener("click", function() {
    if (this.classList.contains("completed")) {
      this.classList.remove("completed");
      pendingTasksList.appendChild(this);
    } else {
      this.classList.add("completed");
      completedTasksList.appendChild(this);
    }
  });
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete");
  deleteButton.addEventListener("click", function() {
    taskElement.remove();
  });
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit");
  editButton.addEventListener("click", function() {
    const newTaskText = prompt("Enter new task text:", taskElement.textContent);
    taskElement.textContent = newTaskText;
  });
  taskElement.appendChild(deleteButton);
  taskElement.appendChild(editButton);
  pendingTasksList.appendChild(taskElement);
  taskInput.value = "";
});