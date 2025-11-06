import { Router } from "express";
import tasksController from "../controllers/tasksController";

const taskRouter = Router();

taskRouter.get("/",tasksController.getTasks),
taskRouter.get("/:id",tasksController.getTask),
taskRouter.post("/",tasksController.createTask),
taskRouter.post("/:id",tasksController.updateTasks);
taskRouter.delete("/:id",tasksController.deleteTasks)

export default taskRouter;

