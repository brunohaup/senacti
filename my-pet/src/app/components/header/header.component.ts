import { Component } from '@angular/core';

@Component({
    //select é o nome para o nosso componente
    selector: 'header',
    templateUrl: './header.component.html',
  })

  export class HeaderComponent {
    //string interpolation
   teste:string = 'eu sei matematica'

  
  }
  