import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interface/User.interface';
@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  users:User[]=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getAll();
    console.log(this.users);
  }

}
