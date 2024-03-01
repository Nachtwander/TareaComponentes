import { Component } from '@angular/core';
import { IComponente3 } from './IComponente3';

@Component({
  selector: 'app-componente3',
  styleUrls: ['./componente3.component.css'],
  templateUrl: './componente3.component.html',
})
export class Componente3 implements IComponente3 {
  mensaje: string;
  mensajeAlerta: string;
  textoBTN: string;

  constructor() {
    this.mensaje = 'Este es el componente 3';
    this.mensajeAlerta = 'Esta es la alerta del componente 3';
    this.textoBTN = 'Presionar el Boton';
  }

  // Utilizar una arrow function para mantener el contexto de 'this'
  onPress = () => {
    alert(this.mensajeAlerta);
  };
}


