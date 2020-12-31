import express from "express";
import { getList,addTask,deleteTask } from '../controllers/todoControllers'

const todoRoutes =express.Router();

todoRoutes
.route('/')
.get(getList)
.post(addTask)

todoRoutes
.route('/:id')
.delete(deleteTask)

export {todoRoutes}
