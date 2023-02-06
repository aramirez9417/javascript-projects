const form = document.querySelector("#form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector("#task-list");

form.addEventListener("submit", addTask);
taskList.addEventListener("click", deleteCheck);

// Load Tasks from Local Storage
document.addEventListener("DOMContentLoaded", function() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function(task) {
    const li = document.createElement("li");
    li.className = "task";
    li.innerHTML = `
      ${task}
      <span class="delete-btn">&times;</span>
    `;
    taskList.appendChild(li);
  });
});

function addTask(e) {
  e.preventDefault();

  if (taskInput.value === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.className = "task";
  li.innerHTML = `
    ${taskInput.value}
    <span class="delete-btn">&times;</span>
  `;
  taskList.appendChild(li);

  // Store Task in Local Storage
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(taskInput.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  taskInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "delete-btn") {
    const task = item.parentElement;
    task.remove();

    // Remove Task from Local Storage
    let tasks;
    if (localStorage.getItem("tasks") === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function(taskItem, index) {
      if (task.textContent.trim() === taskItem) {
        tasks.splice(index, 1);
      }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}
