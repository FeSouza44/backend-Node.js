import Express from  "express";
import { Request, Response, NextFunction } from "express";

const app = Express()
app.use(Express.json())

app.get("/parametro/:nome", (req:Request, res:Response, next:NextFunction)=> {
    const nome = req.params.nome
    console.log("Rota de Parâmetro - Cliente Digitou: ", nome)


    res.send(`voce digitou o nome: ${nome}`)

})

app.get("/corpo", (req: Request, res:Response, next:NextFunction)=> {
    const nome = req.body.nome;
    console.log(`variabel dentro do corpo- cliente digitou ${nome}`)
    res.send("deu certo?")
})

app.get("/exemplo", (req: Request, res: Response, next:NextFunction)=>{
    console.log('sua resposta de teste')
    res.send("Autobots, vamos Rodar!");
})

app.use((req:Request, res:Response, next:NextFunction)=>{
    res.send("deu errado?");
})

export default app
