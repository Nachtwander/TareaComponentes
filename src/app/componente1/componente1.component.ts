import { Component } from '@angular/core';
import { IComponente1 } from './IComponente1';

@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})


export class Componente1 {
  elementoComp : IComponente1 = {
    titulo: 'Componente 1',
    urlImagen: ''
  }
  constructor(){
    this.elementoComp.urlImagen = `https://picsum.photos/id/${getRandomInt(100)}/300/200`;
  }
} 


function getRandomInt(max : number) {
  return Math.floor(Math.random() * max);
}