import{vertebrados} from "./vertebrados";

export class peixe extends vertebrados{

protected tipodeagua: boolean

constructor (quantidadededentes:number, quantidadedeolhos:number, nome:string, tipoanimal:string, ossos:number, tipodeagua: boolean){
    super (quantidadededentes,quantidadedeolhos,nome,tipoanimal,ossos)
    this.tipodeagua = tipodeagua
}

}