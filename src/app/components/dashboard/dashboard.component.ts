import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit {
       dataUser: any;

  constructor( private afAuth: AngularFireAuth,
               private router: Router ) { }

  ngOnInit(): void {
    //Se crea aqui una validacion, si no esta logeado no pueda ingresar a las paginas
  this.afAuth.currentUser.then(user => {
    //Creamos un if que nos haga la validacion que el campo no sea nulo Y que el email este verificado
     if(user && user.emailVerified){
        this.dataUser = user; //Igualamos al usuario
        //console.log(user) //Para validar errorres
      } else{
        //Si el usuario no existe y no esta verificado entonces lo mandamos a logear
      this.router.navigate(['/login']);
   }
    })
  }

  //Se crea metodo para deslogear o Salir
  //Cuando el usuario haga clip en el Boton salir lo mandara al login
  //Se crea un metodo SignOut que devuelte una promesa y se direcciona al login

  salir(){
      this.afAuth.signOut().then(() => this.router.navigate(['/login']));

  }

}


