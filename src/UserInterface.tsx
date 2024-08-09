export interface Userinterface {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  correo: string;
  programa: string;
  id_rol: number;
}

import usuariosData from './json/user.json';
export const usuarios: Userinterface[] = usuariosData;
