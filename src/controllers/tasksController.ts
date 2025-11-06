import { Request, Response, NextFunction } from "express";

function getTasks(req: Request, res: Response, next:NextFunction){
    res.send("Listar todas as tarefas");
}
function getTask(req: Request, res: Response, next:NextFunction){
    res.send("Listar todas as tarefas");
}
    function createTask(req: Request, res: Response, next:NextFunction){
    res.send("Criar Tarefas");
    }
    function updateTasks(req: Request, res: Response, next:NextFunction){
    res.send("atualizar tarefa");
    }
    function deleteTasks(req: Request, res: Response, next:NextFunction){
    res.send("Deletar uma tarefa");
    }

    export default {
        getTask, getTasks, createTask, updateTasks, deleteTasks
    }