import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { User } from 'src/app/interface/User.interface';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent  {

   formulario = this.nuevoFormulario.group({
      nombre:'',
      apellido:'',
      email:'',
      telefono:''
    });

    usuarios:User[]=[];


    constructor(private nuevoFormulario:FormBuilder,private UserService:UserService){}

    CHILLSAVE(){
      let nuevoUser : User = {
        nombre :this.formulario.get('nombre')?.value,
        apellido:this.formulario.get('apellido')?.value,
        email:this.formulario.get('email')?.value,
        telefono:this.formulario.get('telefono')?.value, 
    }
    this.UserService.addUser(nuevoUser);

    console.log(this.usuarios);
    this.limpiarForm();
}


limpiarForm(){
    this.formulario.reset()
}

}

  
