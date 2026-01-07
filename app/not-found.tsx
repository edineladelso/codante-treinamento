import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function NotFound(){


  return (
    <main className="flex flex-col min-h-screen items-center 
    justify-center gap-8 text-2xl py-10 ">
      <div className="flex flex-row items-center justify-center gap-3 font-sans font-bold">
        <p>Ops!</p>
        <p  className="border-r-2 border-r-[#4e433ad3] p-4 font-display" >Erro 404</p>
        <p  className="border-r-2 border-r-[#4e433ad3] p-4" >Nada encontrado!</p>
        <a className={cn( buttonVariants({ variant: "default"}), "text-lg py-6 px-5",)}>Voltar à Home</a>
      </div>
      <div>
        <Image 
        src='/img/astronaut404.png' 
        alt="Not Found"
        width={350}
        height={350} />
      </div>
      <p className="text-2xl font-light text-gray-600">Nao foi possivel encontrar a pagina solicitada</p>
    </main>
  )
}