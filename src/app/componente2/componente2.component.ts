import { Component } from '@angular/core';
import { IComponente2 } from './IComponente2';

@Component({
  selector: 'app-componente2',
  standalone: true,
  imports: [],
  templateUrl: './componente2.component.html',
  styleUrl: './componente2.component.css'
})
export class Componente2 implements IComponente2{
  mensaje: string;
  urlImagen: string;
  
  constructor(){
    this.mensaje = "Hola desde el componente 2";
    this.urlImagen= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getRandomInt(1008)}.png`
    
  }

}

function getRandomInt(max : number) {
  return Math.floor(Math.random() * max);
}