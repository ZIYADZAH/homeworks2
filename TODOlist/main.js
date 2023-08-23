document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("add-button").addEventListener("click", addTask);
});

function addTask() {
    const taskText = document.getElementById("new-task").value;
    if (taskText.trim() === "") return;

    const dueDate = document.getElementById("due-date").value;
    if (!dueDate) return;

    const taskItem = document.createElement("li");
    taskItem.className = "task";
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    
    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;
    
    const dueDateElement = document.createElement("span");
    dueDateElement.textContent = `تاريخ الانتهاء: ${dueDate}`;
    
    const editButton = document.createElement("button");
    editButton.className = "edit-button";
    editButton.textContent = "edit";
    editButton.addEventListener("click", () => {
        const editedText = prompt("edit the task:", taskText);
        if (editedText !== null) {
            taskTextElement.textContent = editedText;
        }
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "delet";
    deleteButton.addEventListener("click", () => {
        taskItem.remove();
    });

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(dueDateElement);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);

    document.getElementById("task-list").appendChild(taskItem);

    document.getElementById("new-task")
    document.getElementById("due-date")
}
