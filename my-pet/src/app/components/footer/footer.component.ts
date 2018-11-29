import { Component } from '@angular/core';

@Component({
    //select é o nome para o nosso componente
    selector: 'footer',
    templateUrl: './footer.component.html',
  })

  export class FooterComponent {
    //event biading

    mostratexto:string
    mostratexto2:string
    textodigitado(valor:Event):void{

       this.mostratexto = ((<HTMLInputElement>valor.target).value)
       
        this.mostratexto2 = this.mostratexto
    }
  }