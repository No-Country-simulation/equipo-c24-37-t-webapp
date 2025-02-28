import LoginPage from "@/app/_components/LoginPage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Iniciar sesión',
    description: 'Inicia sesión en la plataforma de soporte',
}

export default function Home() {
    return (
        <LoginPage />
    );
}
