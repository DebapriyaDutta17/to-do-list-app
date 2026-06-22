function addTask() {

    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = taskText;

    span.addEventListener("click", function(){
        span.classList.toggle("completed");
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function(){
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
