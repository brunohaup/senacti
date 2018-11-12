import {arma} from './arma' 
export class metralhadora extends arma{ 

    public tirosporsegundo:number

    constructor(projeteis:number, capacidade:number, shotPerSecond:number ){
        super(projeteis, capacidade )
        this.tirosporsegundo = shotPerSecond
    }

    public atirar(): void{
        if(this.projeteisNoPente == 0){
        console.log("NÃO tem bala CARAIO, por favor recarregue")
        }
        else {
            this.projeteisNoPente -= this.tirosporsegundo
            console.log("TRA TRA TRA TRA TRA TRA")
            console.log("Você ainda tem " + this.projeteisNoPente + " balas em seu pente!")
        }
    }
}
