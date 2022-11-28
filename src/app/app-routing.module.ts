
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { RegistrarUsuariosComponent } from './components/registrar-usuarios/registrar-usuarios.component';
import { SliderComponent } from './components/slider/slider.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';

//Voy a renderizar los componentes
//Debo colocar los componentes en la ruta para que se muestre
const routes: Routes = [
  {path:'app.component', component: AppComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}, //Cuando no ponga nada mandalo a logear
  {path:'login', component: LoginComponent},
  {path:'registrar-usuario', component: RegistrarUsuariosComponent},
  {path:'verificar-correo', component: VerificarCorreoComponent},
  {path:'recuperar-password', component: RecuperarPasswordComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'footer', component: FooterComponent },
  {path:'slider', component: SliderComponent},

  {path: '**', redirectTo: 'login', pathMatch: 'full'}, //Cuando el usuario ponga una ruta diferente mandalo a logear

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
