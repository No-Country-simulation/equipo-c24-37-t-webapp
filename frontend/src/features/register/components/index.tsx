"use client"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import Auth from "@/lib/auth";
import {toast} from "sonner";
import {SignUpType} from "@/validations/SignUpValidations";
import {useSignUpForm} from "@/features/register/api/mutations";

export default function SignUp() {
    const form = useSignUpForm();

    const onSubmit = async (values: SignUpType) => {
        const response = await Auth.register(values);
        if(response.error){
            toast.error(response.error);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
                <div className = 'flex gap-4'>
                    <FormField control={form.control} name="firstName" render={({field}) => (
                        <FormItem className="w-full">
                            <FormLabel className="ml-2">Nombre</FormLabel>
                            <FormControl>
                                <Input placeholder="Juan" {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}/>
                    <FormField control={form.control} name="lastName" render={({field}) => (
                        <FormItem className="w-full mb-0">
                            <FormLabel className="ml-2">Apellido</FormLabel>
                            <FormControl>
                                <Input placeholder="Pérez" {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}/>
                </div>

                <FormField control={form.control} name="email" render={({field}) => (
                    <FormItem>
                        <FormLabel className="ml-2">Email</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="ejemplo@gmail.com" {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}/>
                <FormField control={form.control} name="password" render={({field}) => (
                    <FormItem>
                        <FormLabel className="ml-2">Contraseña</FormLabel>
                        <FormControl>
                            <Input type="password" {...field} placeholder="******"/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}/>
                <FormField control={form.control} name="confirmPassword" render={({field}) => (
                    <FormItem>
                        <FormLabel className="ml-2">Confirmar Contraseña</FormLabel>
                        <FormControl>
                            <Input type="password" {...field} placeholder="******"/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}/>
                <Button type="submit" variant="tertiary" className="mx-auto w-2/3 mt-8">Registrarse</Button>
            </form>
        </Form>
    )
}