import { Timestamp } from 'rxjs';

export interface ReservaI {

    id?: string;
    horaInicio?: Date;
    horaFin?: Date;
    descripcion?: string;
    tipoReserva?: string;
    costo?: number;
    userUid?: string; // ID DEL PROPIETARIO
    direccion?: DireccionI;
  }

export interface DireccionI {

    id?: string;
    latitud?: string;
    longitud?: string;
  }
