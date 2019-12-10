import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { UserInterface } from '../../../shared/models/user';

import { DataApiService } from '../../../shared/services/data-api.service';
import { MascotaI } from '../../../shared/models/mascota';
import { AngularFireAuth } from '@angular/fire/auth';


import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private dataApi: DataApiService, private authService: AuthService) {
   }
  private mascotas: MascotaI[];
  private users: UserInterface[];
  public isAdmin: any = null;
  public userUid: string = null;
  CodigoQRDelUsuario = '';
  user: UserInterface = {
    email: '',
    photoUrl: '',
    roles: {}
  };

  public providerId = 'null';
  ngOnInit() {
    this.getListMascotas();
    this.getCurrentUser();

    this.authService.isAuth().subscribe(user => {
      if (user) {
        this.user.nombreUsuario = user.displayName;
        this.user.email = user.email;
        this.user.photoUrl = user.photoURL;
        this.providerId = user.providerData[0].providerId;
      }
    });
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole => {
          this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
          // this.isAdmin = true;
        })
      }
    })
  }
  getListMascotas() {
    this.dataApi.getAllMascotas()
      .subscribe(mascotas => {
        this.mascotas = mascotas;
      });
  }

  onDeleteMascota(idMascota: string): void {
    const confirmacion = confirm('Are you sure?');
    if (confirmacion) {
      this.dataApi.deleteMascota(idMascota);
    }
  }

  onPreUpdateMascota(mascota: MascotaI) {
    console.log('MASCOTA', mascota);
    this.dataApi.selectedMascota = Object.assign({}, mascota);
  }
}

