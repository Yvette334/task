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
function showtask() {
  taskdiv.innerHTML = ""
  sampletasks.forEach(function (taskitem) {
    let taskelement = document.createElement("div")
    taskelement.className = "p-3 mb-2 border rounded-lg"
    if (taskitem.status === "completed") {
      taskelement.className =
        "flex items-center justify-between p-3 mb-2 border rounded-lg  bg-green-500"
    }
    taskelement.innerHTML = `
    <div class=" flex p-6 justify-between space-x-6 items-center">
    <input 
        type="checkbox" 
        ${taskitem.status === "completed" ? "checked" : ""}
        onchange="markComplete(${taskitem.id})"
        class="w-6 h-6 border-2 rounded mr-3"
      >
    <h3 class ="font-semibold"> ${taskitem.name}</h3>
    <p class="text-gray-600">Due:${taskitem.dueDate}</p>
    <button onclick= "edit(${
      taskitem.id
    })" class="mt-2 bg-red-500 text-white px-3 py-1 rounded">Edit</button>
    <button onclick= "deletetask(${
      taskitem.id
    })" class="mt-2 bg-red-500 text-white px-3 py-1 rounded">Delete</button>
    </div>
    `
    taskdiv.appendChild(taskelement)
  })
}
showtask()
