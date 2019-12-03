export interface Roles {

  administrador?: boolean;

  admin?: boolean;
}

export interface UserInterface {
  id?: string;

  photoUrl?: string;

  nombreUsuario?: string;

  email?: string;

  password?: string;

  roles?: Roles;
}
