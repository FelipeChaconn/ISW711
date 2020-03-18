import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//importo el componente de la ruta que voy a crear
import {UserListComponent}from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import {Workshop1Component} from './components/workshop1/workshop1.component';
import { from } from 'rxjs';
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
  component: UserListComponent

},
{
  path:'users/add',
  //renderizo el componente
  component: UserFormComponent

},
{
  path:'users/workshop2',
  component: Workshop1Component
},
//el :id es el id por parametro
{
  path:'users/edit/:id' ,
  component:UserFormComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
