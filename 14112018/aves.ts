import{vertebrados} from "./vertebrados";

export class aves extends vertebrados{

protected voo:boolean

constructor (quantidadededentes:number, quantidadedeolhos:number, nome:string, tipoanimal:string, ossos:number, tipodeagua: boolean,voo:boolean){
    super (quantidadededentes,quantidadedeolhos,nome,tipoanimal,ossos)
    this.voo = voo

}