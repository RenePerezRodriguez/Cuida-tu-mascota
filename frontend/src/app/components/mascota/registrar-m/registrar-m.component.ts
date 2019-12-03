import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/interfaces/mascota'

@Component({
  selector: 'app-registrar-m',
  templateUrl: './registrar-m.component.html',
  styleUrls: ['./registrar-m.component.css']
})
export class RegistrarMComponent implements OnInit {

  constructor() { }

  mascota:Mascota={
    nombre: '',
    Edad: 0,
    imagen: '',
    Sexo: '',
    Tamanio:'',
  }; 

  ngOnInit() {
  }

}
