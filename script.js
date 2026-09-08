function addTask(){
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if(task===""){
        alert("Please Enter The Task!");
        return;
    }
    const li = document.createElement("li");
    li.innerHTML=`
    <div>${task}</div>
    <button class ="delete" onClick="deleteTask(this)">Delete</button>
    `;
    document.getElementById("taskList").appendChild(li);

    input.value="";
}
function deleteTask(button){
    button.parentElement.remove();
}