const novaTarefaInput = document.getElementById("novaTarefa");
const addButton = document.getElementById("addButton");
const taskList = document.querySelector("ul");

let tasks = [];

function addTask(taskName) {
  console.log(`Adicionando tarefa: ${taskName}`);
  try {
    const taskListItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    taskListItem.appendChild(checkbox);

    const taskText = document.createElement("span");
    taskText.textContent = taskName;
    taskListItem.appendChild(taskText);

    const removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.className = "removeButton";

    removeButton.addEventListener("click", () => {
      removeTask(taskListItem);
    });

    taskListItem.appendChild(removeButton);

    taskList.appendChild(taskListItem);

    tasks.push(taskName);

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        taskListItem.style.textDecoration = "line-through";
      } else {
        taskListItem.style.textDecoration = "none";
      }
    });
  } catch (error) {
    console.error(`Erro ao adicionar tarefa ${error}`);
  }
}

function removeTask(taskListItem) {
  console.log(`Removendo tarefa: ${taskListItem.textContent}`);
  try {
    const index = tasks.indexOf(taskListItem.textContent);
    if (index !== -1) {
      tasks.splice(index, 1);
    }

    taskList.removeChild(taskListItem);
  } catch (error) {
    console.error(`Erro ao remover tarefa: ${error}`);
  }
}

addButton.addEventListener("click", () => {
  const taskName = novaTarefaInput.value.trim();
  if (taskName) {
    addTask(taskName);
    novaTarefaInput.value = "";
  }
});
