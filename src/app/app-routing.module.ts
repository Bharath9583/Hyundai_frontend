import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {
    path: '',
    loadComponent() {
        return import('src/components/dashboard/dashboard.component').then(m=>m.DashboardComponent)
    },
    canActivate: [LoginGuard]
  },
  {
    path: 'users',
    loadComponent() {
        return import('src/components/users/users.component').then(m => m.UsersComponent)
    },
    canActivate: [LoginGuard]
  },
  {
    path: 'login',
    loadComponent() {
        return import('src/components/login/login.component').then(m => m.LoginComponent)
    },
  },
  {
    path: '**',
    redirectTo: ''
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
