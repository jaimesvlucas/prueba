export interface User {
    id?: number;
    nombre?: string;
    apellidos?: string;
    password?: string;
    email?: string;
    telefono?: string;
    dni?: string;
}

export interface AccesoUsuario{
    email:string;
    password:string;
}
