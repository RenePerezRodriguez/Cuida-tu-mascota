import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../../shared/services/data-api.service';
import { MascotaI } from '../../../shared/models/mascota';
import { NgForm } from '@angular/forms';

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

  onSaveMascota(mascotaForm: NgForm): void {
    if (mascotaForm.value.id == null) {
      // New
      mascotaForm.value.userUid = this.userUid;
      this.dataApi.addMascota(mascotaForm.value);
    } else {
      // Update
      this.dataApi.updateMascota(mascotaForm.value);
    }
    mascotaForm.resetForm();
    this.btnClose.nativeElement.click();
  }

}
