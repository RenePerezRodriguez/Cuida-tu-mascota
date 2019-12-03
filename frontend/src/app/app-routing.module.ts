import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/users/login/login.component';
import { RegisterComponent } from 'src/app/components/users/register/register.component';
import { ProfileComponent } from 'src/app/components/users/profile/profile.component';
import { AuthGuard } from './shared/guards/auth.guard';

import { MascotaComponent } from './components/CRUDS/mascota/mascota.component';
import { HorarioComponent } from './components/CRUDS/horario/horario.component';
import { VacunaComponent } from './components/CRUDS/vacuna/vacuna.component';
import { ConsejoComponent } from './components/CRUDS/consejo/consejo.component';
import { ReservaComponent } from './components/CRUDS/reserva/reserva.component';




const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard] },

  { path: 'CRUD/mascota', component: MascotaComponent },
  { path: 'CRUD/horario', component: HorarioComponent },
  { path: 'CRUD/vacuna', component: VacunaComponent },
  { path: 'CRUD/consejo', component: ConsejoComponent },
  { path: 'CRUD/reserva', component: ReservaComponent },

  { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
