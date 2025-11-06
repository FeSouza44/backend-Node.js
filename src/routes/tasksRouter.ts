import { Router } from "express";

const taskRouter = Router();

taskRouter.get("/",()=>console.log('pegar todas as tarefas'))
taskRouter.get("/:id",()=>console.log('pegar uma tarefa'))
taskRouter.post("/",()=>console.log('criar uma tarefa'))
taskRouter.put("/:id",()=>console.log('atualizar uma tarefa'))
taskRouter.delete("/:id",()=>console.log('deletar uma tarefa'))

export default taskRouter;

