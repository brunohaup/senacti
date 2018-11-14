import { animal } from "./animal";

export default class zoologico{
    private endereço: string
    private listadeanimais: Array<animal>

    constructor(ender:string, listaani:Array<animal>){
        this.endereço = ender
        this.listadeanimais = listaani
    }

public mostrarendereço(): string{
    return this.endereço
}
public consultarlista():Array<animal>{
    return this.listadeanimais
}

}