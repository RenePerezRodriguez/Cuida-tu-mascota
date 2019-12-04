export interface Roles {
  admin2?: boolean; // ADMIN TOTAL
  admin1?: boolean; // VETERINARI@
  admin0?: boolean; // USUARIO NORMAL
}

export interface UserInterface {
  id?: string;

  photoUrl?: string;

  nombreUsuario?: string;

  email?: string;

  password?: string;

  roles?: Roles;

  horario?: HorarioI;
}

export interface HorarioI {
  id?: string;

  horaInicio?: string;

  horaFin?: string;

  horaDescansoInicio?: string;

  horaDescansoFin?: string;

  userUid?: string; // ID DEL PROPIETARIO
}