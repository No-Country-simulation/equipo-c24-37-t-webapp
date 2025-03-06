import {SignUpSchema, SignUpType} from "@/validations/SignUpValidations";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

export const useSignUpForm = () => {
    return useForm<SignUpType>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {email: "", password: "", confirmPassword: "", firstName: "", lastName: ""}
    })
}