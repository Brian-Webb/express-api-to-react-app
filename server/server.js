import express from "express"
import bodyParser from "body-parser"
import TaskController from "./TaskController.js"

const app = express()

// allow for parsing of a json request body
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/api/tasks", TaskController.index)
app.post("/api/tasks", TaskController.store)
app.delete("/api/tasks", TaskController.destroy)

app.listen(5000)