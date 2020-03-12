import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//importo el componente de la ruta que voy a crear
import {UserListComponent}from './components/user-list/user-list.component';
const routes: Routes = [
//Set rutas en angular
{
  path:'',
//voy a redireccionar 
  redirectTo:'/users',
  pathMatch:'full',
},
//crear ruta:
{
  path:'users',
  //renderizo el componente
  component: UserListComponent,

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
