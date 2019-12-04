import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/interfaces/mascota';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

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
