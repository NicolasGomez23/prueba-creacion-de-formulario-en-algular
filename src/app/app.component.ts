import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonasService } from './services/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = '';


   // se crea el formulario el cual pide las variables a llenar 

   formulario:FormGroup = this.fb.group({
    IdPersona: ['',Validators.required],
    Documento: ['',Validators.required],
    Nombres: ['',Validators.required],
    Apellidos: ['',Validators.required],
    Telefono: ['',Validators.required],
    Correo: ['',Validators.required],
    Direccion: ['',Validators.required]


   })
  

  constructor( private personaService:PersonasService, private fb:FormBuilder) {

   }

    ngOnInit():void {
     
      
    }
    // funcion la cual va ligado a una accion de click en donde se llama el servicio para creacion de persona
    Guardar(){
       
      if (this.formulario.valid) {
        this.personaService.postAllpersonajes(this.formulario.value).subscribe((resp:any) => {
          alert("Respuesta de servidor "+resp)  
        })
      } else{
        alert("faltan datos por completar")
      }
       
    }
  
}
