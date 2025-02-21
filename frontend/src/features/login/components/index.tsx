"use client"
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {ChangeEvent, FormEvent, useState} from "react";
import {Button} from "@/components/ui/button";
import {LoginEmailSchema, LoginPasswordSchema, LoginSchema} from "@/validations/LoginValidation";
import ErrorText from "@/components/ui/ErrorText";

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState<{ email?: string, password?: string }>({})

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = LoginSchema.safeParse({email, password});
        if (!result.success) {
            setErrors({
                email: result.error.errors.find(err => err.path[0] === "email")?.message,
                password: result.error.errors.find(err => err.path[0] === "password")?.message
            })
            return;
        }
        setErrors({});
    }
    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setEmail(value);
        const result = LoginEmailSchema.safeParse(value);
        if (!result.success) {
            setErrors(prev => ({...prev, email: result.error.errors[0].message}));
            return;
        }
        setErrors(prev => ({...prev, email: ""}));
    }

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setPassword(value);
        const result = LoginPasswordSchema.safeParse(value);
        if (!result.success) {
            setErrors(prev => ({...prev, password: result.error.errors[0].message}));
            return;
        }
        setErrors(prev => ({...prev, password: ""}));
    }

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-2">
            <Label>Email</Label>
            <Input variant={errors.email ? 'invalid' : 'default'} type="email" value={email} onChange={onEmailChange}/>
            {errors.email && <ErrorText>{errors.email}</ErrorText>}

            <Label>Contraseña</Label>
            <Input type="password" value={password} onChange={onPasswordChange}/>
            {errors.password && <ErrorText>{errors.password}</ErrorText>}

            <Button type="submit" variant="tertiary">Ingresar</Button>
        </form>
    )
}