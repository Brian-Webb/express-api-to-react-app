import React from "react";

export default function TaskList({tasks, onClickDeleteTask}) {
  const handleClick = (event) => {
    const task = event.currentTarget.dataset.task;

    onClickDeleteTask(task)
  }

  return (
    <ol>
      {
        tasks.map((task, i) => (
          <li key={i}>
            {task} <button onClick={handleClick} data-task={task}>X</button>
          </li>
        ))
      }
    </ol>
  )
}