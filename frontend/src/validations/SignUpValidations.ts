import { z } from 'zod';

export const SignUpEmailSchema = z.string({message: "Debes ingresar un correo electrónico"}).email("Debes ingresar un correo electrónico válido");
export const SignUpPasswordSchema = z.string({message: "Debes ingresar tu contraseña"}).min(6, "La contraseña debe tener al menos 6 caracteres");
export const SignUpConfirmPasswordSchema = z.string({message: "Debes confirmar tu contraseña"}).min(6, "La contraseña debe tener al menos 6 caracteres");
export const SignUpFirstNameSchema = z.string({message: "Debes ingresar tu nombre"}).nonempty("Debes ingresar tu nombre");
export const SignUpLastNameSchema = z.string({message: "Debes ingresar tu apellido"}).nonempty("Debes ingresar tu apellido");

export const SignUpSchema = z.object({
    email: SignUpEmailSchema,
    password: SignUpPasswordSchema,
    confirmPassword: SignUpConfirmPasswordSchema,
    firstName: SignUpFirstNameSchema,
    lastName: SignUpLastNameSchema,
})
.refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"]
});

export type SignUpType = z.infer<typeof SignUpSchema>;