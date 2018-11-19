import{animal} from "./animal";

export class vertebrados extends animal{
    protected ossos:number

    constructor (quantidadededentes:number, quantidadedeolhos:number, nome:string, tipoanimal:string, ossos:number){
        super(quantidadededentes,quantidadedeolhos,nome,tipoanimal)
        this.ossos= ossos
    }
}