

import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

  //Creamos un Metodo
  CodeError(code:string){
    // creamos un switch para ir validando los posibles errores
    //En el primer caso donde el usuario ya exista y se quiera registrar
    switch(code){
      case FirebaseCodeErrorEnum.EmailAlreadyinuse:
        return 'El usuario ya existe';

        //Clave debil
        case FirebaseCodeErrorEnum.WeakPassword:
        return 'Su clave es muy debil. La contraseña debe tener 6 caracteres como mínimo';

        //Correo invalido
        case FirebaseCodeErrorEnum.InvalidEmail :
        return 'El correo es invalido';

        //clave incorrecta
        case FirebaseCodeErrorEnum.WrongPassword:
        return 'La contraseña es incorrecta';

        //Usuario no Existe
        case FirebaseCodeErrorEnum.UserNotFound:
        return 'El usuario no Existe';

        //Error desconocido
        default:
          return 'Error desconocido';
    }

   }


}


