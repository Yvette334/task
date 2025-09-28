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
