"use client"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {LoginType} from "@/validations/LoginValidation";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {useLoginForm} from "@/features/login/api/mutations";
import Auth from "@/lib/auth";
import {toast} from "sonner";

export default function Login() {
    const form = useLoginForm();

    const onSubmit = async (values: LoginType) => {
        const response = await Auth.login(values);
        if(response.error){
            toast.error(response.error);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
                <FormField control={form.control} name="email" render={({field}) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="ejemplo@gmail.com" {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}/>
                <FormField control={form.control} name="password" render={({field}) => (
                    <FormItem>
                        <FormLabel>Contraseña</FormLabel>
                        <FormControl>
                            <Input type="password" {...field} placeholder="******"/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}/>
                <Button type="submit" variant="tertiary" disabled={form.formState.isSubmitting}>Ingresar</Button>
            </form>
        </Form>
    )
}