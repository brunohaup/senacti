export class animal{
    protected quantidadededentes: number
    protected quantidadedeolhos: number
    protected tipoanimal:string
    protected nome:string

    constructor (qtddentes:number, qtdolhos:number, nomeanimal:string, tipo:string){
        this.quantidadededentes = qtddentes
        this.quantidadedeolhos = qtdolhos
        this.nome = nomeanimal
        this.tipoanimal = tipo
    }


}