import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListPetsComponent } from './list-pets/list-pets.component';
import { ListUsersComponent } from './list-users/list-users.component';


@NgModule({
  declarations: [AdminComponent, ListPetsComponent, ListUsersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
