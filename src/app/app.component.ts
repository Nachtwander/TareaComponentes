import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1 } from './componente1/componente1.component';
import { Componente2 } from './componente2/componente2.component';
import { Componente3 } from './componente3/componente3.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Componente1, Componente2, Componente3],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TareaComponentes';
}
