import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { IniciarSesionComponent } from './componentes/menu/iniciar-sesion/iniciar-sesion.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalComponent,
    IniciarSesionComponent,
    FooterComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
