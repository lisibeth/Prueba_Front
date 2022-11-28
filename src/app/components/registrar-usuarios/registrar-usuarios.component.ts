
import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-registrar-usuarios',
  templateUrl: './registrar-usuarios.component.html',
  styleUrls: ['./registrar-usuarios.component.css']
})

export class RegistrarUsuariosComponent implements OnInit {
  //Creamos una variable
  registrarUsuario: FormGroup;
  //Declaramos una variable para usar el spinner
  loading: boolean = false;

  //Inyectamos una clase por dependencia
  constructor(

    private fb: FormBuilder, 
    private afAuth: AngularFireAuth,
    private toastr: ToastrService, 
    private router: Router,
    private firebaseError: FirebaseCodeErrorService


    ) {
    this.registrarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email] ],
      password:['', [Validators.required, Validators.minLength(6)]], //Estamos haciendo una validacion para que la la clave tenga minimo 6 caracteres
      repetirPassword:['',Validators.required],
    })
   }

  ngOnInit(): void {
  }

  //Evento que acciona al hacer clip en el boton del formulario 
  registrar(){
    //Voy a crear una constante para que una vez tenga la configuracion en FIREBASE pueda enviar Los datos que se deseen
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassword = this.registrarUsuario.value.repetirPassword;
    console.log(email,password,repetirPassword);

    //Creamos una validacion, en caso que no seas iguales las claves de un alerta

    if(password !==repetirPassword){
      this.toastr.error('Las contraseñas no coinciden por favor verificar los datos ingresados' , 'Error');
      return; //Para que muera aqui y no pase al las validaciones del switch
    }

    //Aqui imprimimos por consola para validar que se esten pasando los datos
    //console.log(this.registrarUsuario);

    /*Una vez que el usuario le de al Boton registrar y pase la validacion del If (ciclo) y tome
    La variable Loading como verdadera (this.loading = true; )y cuando termine se coloca como falsa ( this.loading = false;)
     y de ocurrir un error sera falsa 
      }).catch((error) => {
       //console.log(error);
       this.loading = false;
       this.toastr.error(this.firebaseError(error.code), 'Error')
    })
    */


    this.loading = true;
    this.afAuth
    .createUserWithEmailAndPassword(email,password)
    .then((user) => {
      //this.loading = false;
      //this.toastr.info('El usuario fue registrado exitosamente', 'Usuario registrado'); //Aqui damos la notificacion de registro exitoso
      //this.router.navigate(['/login']); //Aqui lo enviamos una vez registrado a logearse
      //console.log(user);

      this.verificarCorreo();

    }).catch((error) => {
       //console.log(error);
       this.loading = false;
       this.toastr.error(this.firebaseError.CodeError(error.code), 'Error')
    })

  }

  //Se crea un metodo

  verificarCorreo(){
    this.afAuth.currentUser
    .then(user => user?.sendEmailVerification())
    .then(() => {
      this.toastr.info('Le hemos enviado un correo electronico para su verificacion', 'Verificar Correo'); 
      this.router.navigate(['/login']); 
      });
  }

}
