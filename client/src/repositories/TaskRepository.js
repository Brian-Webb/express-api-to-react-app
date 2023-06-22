export const all = () => {
  return fetch("/api/tasks")
    .then(response => response.json())
    .then(data => { return data.tasks ?? [] })
}

export const create = (task) => {
  const body = {
    "task": task
  }

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
  }

  return fetch("/api/tasks", options)
    .then(response => response.json())
    .then(data => { return data.tasks ?? [] })
}

export const destroy = (task) => {
  const body = {
    "task": task
  }

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
  }

  return fetch("/api/tasks", options)
    .then(response => response.json())
    .then(data => { return data.tasks ?? [] })
}

const TaskRepo = {all, create, destroy}
export default TaskRepo