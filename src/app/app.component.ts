
import { Component, OnInit } from '@angular/core';
//Importamos el servicio
//import { MonedaService } from './components/slider/slider.service';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'prueba-firebase'; //Api de la validacion de Usuario


  constructor(){}

  //Llamo al servicio y le asigno el valor
  ngOnInit(){}

}
