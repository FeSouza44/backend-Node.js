class Tasks{
    id: number;
    nome: string;
    descricao: string;

    private static nextID = 1;

    constructor(nome:string, descricao:string){
        this.id = Tasks.nextID++;
        this.nome = nome;
        this.descricao = descricao;
    }
}
