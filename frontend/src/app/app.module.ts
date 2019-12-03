import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { NavigationComponent } from './components/navigation/navigation.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegistrarMComponent } from './components/mascota/registrar-m/registrar-m.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { ModalMascotaComponent } from './components/modals/modal-mascota/modal-mascota.component';
import { MascotaComponent } from './components/CRUDS/mascota/mascota.component';
import { HorarioComponent } from './components/CRUDS/horario/horario.component';
import { VacunaComponent } from './components/CRUDS/vacuna/vacuna.component';
import { ConsejoComponent } from './components/CRUDS/consejo/consejo.component';
import { ReservaComponent } from './components/CRUDS/reserva/reserva.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RegisterComponent,
    LoginComponent,
    RegistrarMComponent,
    ProfileComponent,
    ModalMascotaComponent,
    MascotaComponent,
    HorarioComponent,
    VacunaComponent,
    ConsejoComponent,
    ReservaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
