import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from 'src/app/models/User';

/**para hacer el redirect 
 * cuando algo guarde y luego la instancio en el construcxtor 
 *  el activedRoute es para saber que recibo como parametro **/
import {ActivatedRoute,Router} from '@angular/router';

//despues de declarar el objeto importo el servicio y luego la instancio en el construcxtor
import {UsersService} from '../../services/users.service';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  //viene desde angular core y sirve para encapsular desde ts
  @HostBinding('class') classes = 'row';

   //voy a crear un objeto que sera el que sera enviado al la base de datosa por medio de la APi
   /**Al escribir el user: User visual studio hace el import arriba con una rusa absoluta */
   user: User = {
     id: 0,
     first_name: '',
     last_name: '',
     image: '',
     register_at : new Date()
   };

   edit: boolean = false;
  constructor(private usersService: UsersService, private router: Router, private activatedR : ActivatedRoute) { }

  ngOnInit(): void {
    //Esto obtiene los parametros que le estoy pasando
    const params = this.activatedR.snapshot.params;

    //valido que venga el parametro
    if( params.id) {
        this.usersService.getUser(params.id).subscribe(
          res =>{
            console.log(res);
            //esto lo asocio al objeto y con solo eso lo asocio a los campos esta con doble enlace de datos 
            this.user = res;

            //si entra aqui pone la variable edit en true
            this.edit= true;
          },
          err => console.error(err)
        )

    }
  }
  saveNewUser() {
    //esto se debe porque mi base de datos genera estos datos no los necesito.
    delete this.user.register_at;
    delete this.user.id;

    this.usersService.saveUser(this.user)
    //recoordar que en el service el metodo devuelve un subscribe un observable
    .subscribe(
    res=> {
      console.log(res);
      //esto nos envia a la ruta users
      this.router.navigate(['/users']);
    },
    err => console.error(err)
    )
  }
  updateUser() {
    //es una fecha de creacion y mantiene la misma siempre
    delete this.user.register_at;

    this.usersService.updateUser(this.user.id.toString(),this.user) .subscribe(
      res=> {
        console.log(res);
        //esto nos envia a la ruta users
        this.router.navigate(['/users']);
      },
      err => console.error(err)
      )
  }


}
