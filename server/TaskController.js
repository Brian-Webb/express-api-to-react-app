// instead of figuring out a db for this, this array is a mock store
let tasks = ["clean up", "wash car", "buy stuff"]

const addTask = (task) => {
  tasks.push(task)
}

const deleteTask = (taskToDelete) => {
  tasks = tasks.filter((task) => {
    return task !== taskToDelete
  })
}

export const index = (req, res) => {
  res.json({
    "tasks": tasks,
  })
}

export const store = (req, res) => {
  const task = req.body.task

  addTask(task)

  res.json({
    "tasks": tasks,
  })
}

export const destroy = (req, res) => {
  const task = req.body.task

  deleteTask(task)

  res.json({
    "tasks": tasks,
  })
}

const TaskController = {index, store, destroy}

export default TaskController