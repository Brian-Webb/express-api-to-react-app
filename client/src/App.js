import React, {useEffect, useState} from "react"
import TaskRepo from "./repositories/TaskRepository"
import TaskList from "./components/TaskList"
import NewTaskForm from "./components/NewTaskForm"
import "./App.css"

export default function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    async function fetchData(){
      const tasks = await TaskRepo.all()

      setTasks(tasks);
    }

    fetchData()
      .catch(console.error);
  }, [])

  async function onSubmitTask(task) {
    const updatedTasks = await TaskRepo.create(task)

    setTasks(updatedTasks)
  }

  async function onClickDeleteTask(task) {
    const updatedTasks = await TaskRepo.destroy(task)

    setTasks(updatedTasks)
  }

  return (
    <div className="container">
      <NewTaskForm onSubmitTask={onSubmitTask}/>

      <hr/>

      {(typeof tasks === "undefined") ? (
        <p>Loading...</p>
      ) : (
        <TaskList tasks={tasks} onClickDeleteTask={onClickDeleteTask}/>
      )}
    </div>
  )
}
