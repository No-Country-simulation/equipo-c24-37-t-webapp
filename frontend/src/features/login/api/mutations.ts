import {LoginSchema, LoginType} from "@/validations/LoginValidation";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

export const useLoginForm = () => {
    return useForm<LoginType>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {email: "", password: ""}
    })
}