
//Aqui hacemos la peticion para consumir el api de Monedas

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //esto permite usar esta clase

//Creamos una interfaz donde colocamos ls datos de las Monedas

interface Coin {
  id: string;
  image: string; //Recibe una url
  name: string; //Nombre de la moneda
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number; // Valor de la moneda en 24 horas
  total_volume: number; //Total de monedas en circulacion
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})

export class SliderComponent implements OnInit {

  //Voy a definir una Variable para guardar la Informacion que viene desde un Arreglo

  coins: Coin[] = []; //La declaramos Vacia

  titles: string [] = [ //Aqui estoy creando un arreglo que me permite hacer las pestanas de la tabla
   'Moneda',            //Si tener que crearlas una a una/ Solo llamo al arreglo y ya
   'Precio',
   'P. Actual',
   'Volumen',


  ];

  //Voy a instanciar la clase, y a colocar la clase HTTP como privada para poder llamarla desde otros puntos
  constructor(private http: HttpClient) {}

  ngOnInit() {
    //Hago una peticion por el metodo Get a la ulr del api que quiero consumir
    this.http
      .get<Coin[]>( //Aqui se ejecuta
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.coins = res  //Aqui muestra la respuesta que reciba del Arreglo
        },
        (err) => console.log(err)
      );
    //Esta peticion va a regresar o una respuesta o un error/ Para manejarlo use el metodo Subscribe.
    //Y lo muestro por consola
  }
}
