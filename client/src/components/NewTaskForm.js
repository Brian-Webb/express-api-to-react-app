import React from "react";

export default function NewTaskForm({onSubmitTask}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const task = event.currentTarget.elements.taskInput.value ?? null;

    event.currentTarget.elements.taskInput.value = null

    if (task) {
      onSubmitTask(task);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="taskInput">New Task: <br/>
        <input id="taskInput" type="text"/>
      </label> <br/>
      <input type="submit" value="Add Task"/>
    </form>
  )
}