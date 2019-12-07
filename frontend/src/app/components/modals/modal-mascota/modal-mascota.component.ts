import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../../shared/services/data-api.service';
import { MascotaI } from '../../../shared/models/mascota';
import { NgForm } from '@angular/forms';
import { Mascota } from 'src/app/interfaces/mascota';

@Component({
  selector: 'app-modal-mascota',
  templateUrl: './modal-mascota.component.html',
  styleUrls: ['./modal-mascota.component.css']
})
export class ModalMascotaComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  @ViewChild('btnClose') btnClose: ElementRef;
  @Input() userUid: string;
  ngOnInit() {
  }

  public imagen='';
  mascota:Mascota={
    nombre: '',
    Edad: 0,
    imagen: '',
    Sexo: '',
    Tamanio:'',
  };

  mascotaForm: NgForm;

  onSaveMascota(): void {
    if (this.mascotaForm.value.id == null) {
      // New
      this.mascotaForm.value.userUid = this.userUid;
      this.dataApi.addMascota(this.mascotaForm.value);
    } else {
      // Update
      this.dataApi.updateMascota(this.mascotaForm.value);
    }
    this.mascotaForm.resetForm();
    this.btnClose.nativeElement.click();
  }


  localUrl: any[];
  showPreviewImage(event: any) 
  {
    if (event.target.files && event.target.files[0]) 
    {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
        this.mascota.imagen=event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
      
  }

}
