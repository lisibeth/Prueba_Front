

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MODULOS

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



//COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrarUsuariosComponent } from './components/registrar-usuarios/registrar-usuarios.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http'; //Modulo de peticiones
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistrarUsuariosComponent,
    VerificarCorreoComponent,
    RecuperarPasswordComponent,
    SpinnerComponent,
    SliderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), //Pasamos la configuracion de FIREBASE
    BrowserAnimationsModule,
    HttpClientModule, //Con este aqui podemos hacer peticiones
    ToastrModule.forRoot()

  ],
  providers: [
  //  MonedaService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
