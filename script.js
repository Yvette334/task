let sampletasks = JSON.parse(localStorage.getItem("tasks")) || [
  {
    id: 1,
    name: "Complete portfolio website",
    dueDate: "2025-09-30",
    status: "pending",
  },
  {
    id: 2,
    name: "Study JavaScript arrays",
    dueDate: "2025-09-28",
    status: "pending",
  },
  {
    id: 3,
    name: "Prepare Monday presentation",
    dueDate: "2025-09-29",
    status: "completed",
  },
  {
    id: 4,
    name: "Review Tailwind CSS",
    dueDate: "2025-10-01",
    status: "pending",
  },
  {
    id: 5,
    name: "Practice DOM exercises",
    dueDate: "2025-09-27",
    status: "completed",
  },
]
function save() {
  localStorage.setItem("tasks", JSON.stringify(sampletasks))
}
let taskdiv = document.getElementById("task")
let currentfil = "all"
function showtask() {
  taskdiv.innerHTML = ""
  sampletasks.forEach(function (taskitem) {
    let taskelement = document.createElement("div")
    taskelement.className =
      "flex items-center justify-between p-3 mb-2 border rounded-lg"
    if (taskitem.status === "completed") {
      taskelement.className =
        "bg-green-500  flex items-center justify-between p-3 border rounded-lg "
    }
    taskelement.innerHTML = `
    <div class="items-center">
    <input 
        type="checkbox" 
        ${taskitem.status === "completed" ? "checked" : ""}
        onchange="markComplete(${taskitem.id})"
        class="w-6 h-6 border-2 rounded "
      >
    <h3 class ="font-semibold line-through flex justify-between"> ${
      taskitem.name
    }</h3>
    <p class="text-gray-600 ">Due:${taskitem.dueDate}</p>
    </div>
    <div class="space-x-3">
    <button  onclick="edit(${
      taskitem.id
    })" class="mt-2 border bg-orange-500 text-black px-3 py-1 rounded">Edit</button>
    <button  onclick= "deletetask(${
      taskitem.id
    })" class="mt-2 bg-red-500 text-white px-3 py-1 rounded">Delete</button>
    </div>
    `
    taskdiv.appendChild(taskelement)
  })
}
document
  .getElementById("taskform")
  .addEventListener("submit", function (event) {
    event.preventDefault() //stop refesh
    let name = document.getElementById("taskname").value
    let date = document.getElementById("date").value
    if (name.trim() === "") {
      alert("Please enter the name for your task")
      return //no name stop
    }

    let newtask = {
      id: Date.now(),
      name: name,
      dueDate: date,
      status: "pending",
    }
    sampletasks.push(newtask)
    showtask()
    save()
    document.getElementById("taskform").reset()
  })
showtask()

// delete the task
function deletetask(taskid) {
  if (!confirm("Are you sure want to delete this task")) {
    return
  }
  sampletasks = sampletasks.filter(function (task) {
    return task.id !== taskid
  })
  showtask()
  save()
}
function markComplete(taskid) {
  const task = sampletasks.find((task) => task.id === taskid)
  if (task) {
    task.status = task.status === "completed" ? "pending" : "completed"
    save()
    if (currentfil === "completed") {
      allcompleted()
    } else if (currentfil === "pending") {
      allpending()
    } else {
      showtask()
    }
  }
}
function edit(taskid) {
  const task = sampletasks.find(function (task) {
    return task.id === taskid
  })
  if (!task) return

  let newname = prompt("Edit your name of the task", task.name)
  if (newname !== null) {
    if (newname.trim() === "") {
      alert("The task can not be empty")
      return edit(taskid)
    }
    task.name = newname.trim()
    let newdate = prompt("Edit due date (YYYY-MM-DD)", task.dueDate)
    if (newdate !== null) {
      task.dueDate = newdate.trim()
    }
    showtask()
    save()
  }
}
function alltask() {
  currentfil = "all"
  showtask()
}
function allcompleted() {
  currentfil = "completed"
  let completedtask = sampletasks.filter((task) => task.status === "completed")
  displayfiltered(completedtask)
}
function allpending() {
  currentfil = "pending"
  let pendingtask = sampletasks.filter((task) => task.status === "pending")
  displayfiltered(pendingtask)
}
function displayfiltered(tasks) {
  taskdiv.innerHTML = ""
  tasks.forEach(function (taskitem) {
    let taskelement = document.createElement("div")
    taskelement.className =
      "flex items-center justify-between p-3 mb-2 border rounded-lg"
    if (taskitem.status === "completed") {
      taskelement.className =
        "bg-green-500  flex items-center justify-between p-3 border rounded-lg "
    }
    taskelement.innerHTML = `
    <div class="items-center">
    <input 
        type="checkbox" 
        ${taskitem.status === "completed" ? "checked" : ""}
        onchange="markComplete(${taskitem.id})"
        class="w-6 h-6 border-2 rounded "
      >
    <h3 class ="font-semibold line-through flex justify-between"> ${
      taskitem.name
    }</h3>
    <p class="text-gray-600 ">Due:${taskitem.dueDate}</p>
    </div>
    <div class="space-x-3">
    <button  onclick="edit(${
      taskitem.id
    })" class="mt-2 border bg-orange-500 text-black px-3 py-1 rounded">Edit</button>
    <button  onclick= "deletetask(${
      taskitem.id
    })" class="mt-2 bg-red-500 text-white px-3 py-1 rounded">Delete</button>
    </div>
    `
    taskdiv.appendChild(taskelement)
  })
}
showtask()
save()
