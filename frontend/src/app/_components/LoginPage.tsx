import Image from "next/image";
import Login from "@/features/login/components";

export default function LoginPage(){
   return (
    <main className="flex flex-row h-screen w-full">
        <section className="flex-1 size-full flex flex-col justify-center">
            <div className="mx-auto">
                <h1 className="text-5xl font-semibold">¡Bienvenido!</h1>
                <h2 className="text-2xl text-muted-foreground mt-2 mb-4">Por favor ingrese sus datos</h2>
                <Login />
            </div>
        </section>
        <section className="bg-tertiary flex-1 hidden md:block">
            <Image src="/LoginImage.png" alt="imagen" className="size-full" width={400} height={400} />
        </section>
    </main>
   )
}