import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../../shared/services/data-api.service';
import { ConsejoI } from '../../../shared/models/consejos';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-consejo',
  templateUrl: './modal-consejo.component.html',
  styleUrls: ['./modal-consejo.component.css']
})
export class ModalConsejoComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  @ViewChild('btnClose') btnClose: ElementRef;
  @Input() userUid: string;
  ngOnInit() {
  }

  onSaveConsejo(consejoForm: NgForm): void {
    if (consejoForm.value.id == null) {
      // New
      consejoForm.value.userUid = this.userUid;
      this.dataApi.addConsejo(consejoForm.value);
    } else {
      // Update
      this.dataApi.updateConsejo(consejoForm.value);
    }
    consejoForm.resetForm();
    this.btnClose.nativeElement.click();
  }

}
