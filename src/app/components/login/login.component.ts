import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Creamos una variable
  loginUsuario: FormGroup;

  loading:Boolean = false; //Agregar spinner

  constructor(  //Copiamos las misma instancias que colocamos en registro

    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService

  ) {
    this.loginUsuario = this.fb.group({
      email:['', [Validators.required,Validators.email]],
      password:['', Validators.required],
    })
  }

  ngOnInit(): void {}

  login(){
    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;
    //console.log(email, password);

    this.loading = true;
    this.afAuth.signInWithEmailAndPassword(email, password).then((user) => {   //Creamos una instancia que retorne una promesa
   // console.log(user);

   if(user.user?.emailVerified){
    this.router.navigate(['/dashboard']);
   } else{
    this.router.navigate(['/verificar-correo']); //Aqui hacemos a validacion que este verificado el correo
   }

    }).catch((error) => {
      this.loading = false;
     this.toastr.error(this.firebaseError.CodeError(error.code), 'Error');

    })

  }

}



