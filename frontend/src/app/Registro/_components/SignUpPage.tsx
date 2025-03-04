import Image from "next/image";
import SignUp from "@/features/register/components";

export default function SignUpPage() {
    return (
        <main className="flex flex-row h-screen w-full">
            <section className="bg-tertiary flex-1 hidden md:block">
                <Image src="/Assets/SignUpImage.svg" alt="imagen" className="size-full" width={400} height={400}/>
            </section>
            <section className="flex-1 size-full flex flex-col justify-center">
                <div className="mx-auto w-2/3">
                    <h1 className="text-5xl font-medium">Registrate!</h1>
                    <h2 className="text-xl text-muted-foreground mt-1 mb-2">Solo te va a tomar un minuto...</h2>
                    <SignUp/>
                </div>
            </section>
        </main>
    )
}