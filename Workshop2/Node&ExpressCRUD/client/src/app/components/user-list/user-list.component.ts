import { Component, OnInit } from '@angular/core';

//trae los servicios(APIs)
import {UsersService} from '../../services/users.service';
import { User } from 'src/app/models/User';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
users: any =[];
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(
      res => {
        this.users = res;
      },
      err => console.log(err)
    )
  }

}
