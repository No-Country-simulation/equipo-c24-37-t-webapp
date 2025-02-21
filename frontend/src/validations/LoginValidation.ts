import {z} from 'zod';

export const LoginEmailSchema = z.string({message: "Debes ingresar un correo electrónico"}).email("Debes ingresar un correo electrónico válido");
export const LoginPasswordSchema = z.string({message: "Debes ingresar tu contraseña"}).min(6, "La contraseña debe tener al menos 6 caracteres");

export const LoginSchema = z.object({
    email: LoginEmailSchema,
    password: LoginPasswordSchema,
});