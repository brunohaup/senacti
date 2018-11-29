import { Component } from '@angular/core';
import {Hero,Pessoa} from '../models/hero.model';

@Component({
    //select é o nome para o nosso componente
    selector: 'main',
    templateUrl: './main.component.html',
  })

  export class MainComponent {
    //property binding
    imagem:string = '/assets/img/1.jpg'
    //event biading
    exibirimagem():void{
      if(this.imagem == '')
      this.imagem = '/assets/img/1.jpg'
      else
      this.imagem = ''
    }
    public numeromen:Number = 40
    public texto:string
    public definirtexto(x:string):void{
      this.texto = x
      
    }

    heroes = [
      new Hero(1, 'Eu mesmo'),
      new Hero(13, 'Bombasto')
    
  
    ];
    public pessoa= new Pessoa()
    puclic arraypessoa: Pessoa[] =[]
    textoarray = [
     
    ];
    
    textodigitado(valor:Event):void{
      this.pessoa.nome = (<HTMLInputElement>valor.target).value
      
  }
  textodigitado2(valor2:Event):void{
    this.pessoa.sobrenome = (<HTMLInputElement>valor2.target).value
}
  public botao():void{
    this.textoarray.push(this.pessoa)
 }
}