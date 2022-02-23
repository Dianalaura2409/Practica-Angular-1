import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 nombre:string =""
 select :string =""
 usuarios:any[]=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void { //Estado cuando recien arranca la aplicacion
  this.traerUsuarios();  
  }

async traerUsuarios(){
  this.usuarios=await Promise.all(this.userService.getAll());
  console.log("User en HOME");
  console.log(this.usuarios);
}

}
