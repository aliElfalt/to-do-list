// Check Local Storage
let tasks_container = document.querySelector(".tasks");
let tasks_array = [];
if (localStorage.getItem("tasks")) {
  let task = localStorage.tasks.split(",");
  for (let i = 0; i < task.length; i++) {
    if (task[i] === "") {
      continue;
    }
    tasks_array.push(task[i]);
    let task_container = document.createElement("div");
    let task_p = document.createElement("p");
    let task_buttons = document.createElement("div");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let edit_container = document.createElement("div");
    let edit_input = document.createElement("input");
    let button = document.createElement("button");
    task_container.classList.add("task");
    task_buttons.classList.add("buttons");
    button1.id = "edit";
    button2.id = "delete";
    task_p.innerText = task[i];
    button1.innerText = "EDIT";
    button2.innerText = "DELETE";
    edit_container.classList.add("edit");
    edit_input.value = task[i];
    button.id = "save";
    button.innerText = "SAVE";
    tasks_container.append(task_container);
    task_container.append(task_p, task_buttons, edit_container);
    task_buttons.append(button1, button2);
    edit_container.append(edit_input, button);
  }
}


// Add button
let add_task_input = document.querySelector(".add-task-input");
let add_task_button = document.querySelector(".add-task-btn");
add_task_button.onclick = function () {
  let value = add_task_input.value;
  if (value != "") {
    let task_container = document.createElement("div");
    let task_p = document.createElement("p");
    let task_buttons = document.createElement("div");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let edit_container = document.createElement("div");
    let edit_input = document.createElement("input");
    let button = document.createElement("button");
    task_container.classList.add("task");
    task_buttons.classList.add("buttons");
    button1.id = "edit";
    button2.id = "delete";
    task_p.innerText = value;
    button1.innerText = "EDIT";
    button2.innerText = "DELETE";
    edit_container.classList.add("edit");
    edit_input.value = value;
    button.id = "save";
    button.innerText = "SAVE";
    tasks_container.append(task_container);
    task_container.append(task_p, task_buttons, edit_container);
    task_buttons.append(button1, button2);
    edit_container.append(edit_input, button);
    add_task_input.value = '';

    // Add To Local Storage 
    tasks_array.push(value);
    localStorage.setItem("tasks", tasks_array);
  }
}

document.addEventListener("click", (e) => {
  // Delete Button
  if (e.target.id === "delete") {
    let btns = document.querySelectorAll("#delete");
    btns = [...btns];
    let task_container = document.querySelectorAll(".task")[btns.indexOf(e.target)];
    task_container.remove();

    // Delete From Local Storage
    delete tasks_array[btns.indexOf(e.target)];
    localStorage.setItem("tasks", tasks_array);
  }

  // Edit Button
  if (e.target.id === "edit") {
    let btns = document.querySelectorAll("#edit");
    btns = [...btns];
    let edit_container = document.querySelectorAll(".edit")[btns.indexOf(e.target)];
    let edit_input = document.querySelectorAll(".edit input")[btns.indexOf(e.target)];
    edit_container.style.display = "flex";
    edit_input.focus();
  }

  // Save Button
  if (e.target.id === "save") {
    let btns = document.querySelectorAll("#save");
    btns = [...btns];
    let edit_container = document.querySelectorAll(".edit")[btns.indexOf(e.target)];
    let edit_input = document.querySelectorAll(".edit input")[btns.indexOf(e.target)];
    let task_p = document.querySelectorAll(".task p")[btns.indexOf(e.target)];
    task_p.innerText = edit_input.value;
    edit_container.style.display = "none";

    // Save Changes In Local Storage
    tasks_array[btns.indexOf(e.target)] = edit_input.value;
    localStorage.setItem("tasks", tasks_array);
  }
});