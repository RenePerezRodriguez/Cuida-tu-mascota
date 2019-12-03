import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';

/* FIREBASE */
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import { ListPetsComponent } from './components/list-pets/list-pets.component';
import { ModalLoginComponent } from './components/modals/modal-login/modal-login.component';
import { ModalRegisterComponent } from './components/modals/modal-register/modal-register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { Page404Component } from './components/pages/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ListPetsComponent,
    ModalLoginComponent,
    ModalRegisterComponent,
    ProfileComponent,
    Page404Component
=======
    NavigationComponent,
    FooterComponent
>>>>>>> master
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AppRoutingModule
  ],
  providers: [
  {provide: StorageBucket, useValue: 'gs://cuidatumascota-3fd63.appspot.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
