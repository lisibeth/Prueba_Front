import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {
  recuperarUsuario: FormGroup;
  loading: boolean = false;

  constructor(    
    private fb: FormBuilder, 
    private afAuth: AngularFireAuth,
    private toastr: ToastrService, 
    private router: Router,
    private firebaseError: FirebaseCodeErrorService) {

      this.recuperarUsuario = this.fb.group({
        correo:['', [Validators.required, Validators.email]],
      })
     }

  ngOnInit(): void {
  }
  recuperar(){
    //creamos una constante para atrapar el email y pasar el valor
    const email = this.recuperarUsuario.value.correo;

    //Cuando el usuario haga clip en recuperar
    this.loading = true;
    this.afAuth.sendPasswordResetEmail(email).then(() => {
    
    //Mensaje mostrado cuando la clase se envie al correo
    this.toastr.info('Le fue enviado un correo para el restablecimiento de su password','Recuperar Password');
    //Cuando es correcto lo mandamos al login
     this.router.navigate(['/login']);

    }).catch((error) =>{
      //Si hay un error lo ponemos como falso
      this.loading = false;
      this.toastr.error(this.firebaseError.CodeError(error.code), 'Error');

    })

  }

}
