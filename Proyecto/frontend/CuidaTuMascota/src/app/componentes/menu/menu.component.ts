import { Component, OnInit } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IniciarSesionComponent } from 'src/app/componentes/menu/iniciar-sesion/iniciar-sesion.component'
import { HomePageComponent } from 'src/app/componentes/home-page/home-page.component'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css',
  '../../Template/doglife/fonts/icomoon/style.css',
  '../../Template/doglife/css/bootstrap.min.css',
  '../../Template/doglife/css/jquery-ui.css',
  '../../Template/doglife/css/owl.carousel.min.css',
  '../../Template/doglife/css/owl.theme.default.min.css',
  '../../Template/doglife/css/jquery.fancybox.min.css',
  '../../Template/doglife/css/bootstrap-datepicker.css',
  '../../Template/doglife/fonts/flaticon/font/flaticon.css',
  '../../Template/doglife/css/aos.css',
  '../../Template/doglife/css/style.css']
})
export class MenuComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  home: HomePageComponent

  AbrirIniciarSesion() {
    //this.modalService.open(IniciarSesionComponent);

  }

  ngOnInit() {
  }

}
