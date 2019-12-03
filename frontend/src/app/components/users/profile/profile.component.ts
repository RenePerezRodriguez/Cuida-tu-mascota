import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { UserInterface } from '../../../shared/models/user';
import { DataApiService } from '../../../shared/services/data-api.service';



import {NgForm} from '@angular/forms';

import { from } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService, private route: ActivatedRoute, private dataApi: DataApiService) {
   }
  private users: UserInterface[];
  public isAdmin: any = null;
  public userUid: string = null;
  user: UserInterface = {
    email: '',
    photoUrl: '',
    roles: {}
  };

  public providerId = 'null';
  ngOnInit() {
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
        });
      }
    });
  }
}
