function moveTask(task, destination) {
    var taskText = task.firstChild.textContent;
    var doneTask = document.createElement("li");
    doneTask.textContent = taskText;

    destination.appendChild(doneTask);
    task.parentNode.removeChild(task);
}