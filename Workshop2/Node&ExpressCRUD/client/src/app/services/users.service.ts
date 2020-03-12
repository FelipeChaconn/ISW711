import { Injectable } from "@angular/core";
//el encargado de hacer las peticiones HTTP
import { HttpClient } from "@angular/common/http";
// importo interfaz 
import {User} from '../models/User'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: "root"
})
export class UsersService {
  //propiedad para no escribir siempre la api
  API_URI = "http://localhost:3000/api";

  constructor(
    //la instancio y creo la variable
    private http: HttpClient
  ) {}

  getUsers() {
    return this.http.get(`${this.API_URI}/users`);
  }
  getUser(id: string) {
    return this.http.get(`${this.API_URI}/users/${id}`);
  }
  saveUser(user: User) {
    return this.http.post(`${this.API_URI}/users/`,user);
  }
  deleteUser(id: string) {
    return this,this.http.delete(`${this.API_URI}/users/${id}`);
  }
  //Mejor especificaciones con el observable
  updateUser(id: string,updateUser:User):Observable<User> {
    return this,this.http.put(`${this.API_URI}/users/${id}`,updateUser);
  }
}
