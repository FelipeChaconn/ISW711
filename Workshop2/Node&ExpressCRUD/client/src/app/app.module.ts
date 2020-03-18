import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
//importo lo siguiente
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';

import {UsersService} from './services/users.service';
import { from } from 'rxjs';
import { Workshop1Component } from './components/workshop1/workshop1.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserFormComponent,
    UserListComponent,
    Workshop1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //despues de importarlo arriba tengo que usarlo aqui
    HttpClientModule,
    FormsModule
  ],
  providers: [
    //tiene un provedor
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
