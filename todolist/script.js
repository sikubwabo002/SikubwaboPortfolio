document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    // Event listener for adding a task
    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    // Event listener for pressing Enter key
    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                addTask(taskText);
                taskInput.value = "";
            }
        }
    });

    // Function to add a new task
    function addTask(text) {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <input type="checkbox">
            <span>${text}</span>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(taskItem);

        // Event listener for task completion
        const checkbox = taskItem.querySelector("input[type='checkbox']");
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                taskItem.classList.add("completed");
            } else {
                taskItem.classList.remove("completed");
            }
        });

        // Event listener for task deletion
        const deleteButton = taskItem.querySelector(".delete");
        deleteButton.addEventListener("click", function () {
            taskItem.remove();
        });
    }
});


