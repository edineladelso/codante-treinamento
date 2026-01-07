import Image from "next/image"

export default function NotFound(){


  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="flex flex-row items-center justify-center gap-3 font-sans">
        <p>Ops!</p>
        <p  className="border-r-2 border-r-[#4e433ad3] p-4" >Erro 404</p>
        <p  className="border-r-2 border-r-[#4e433ad3] p-4" >Nada encontrado!</p>
        <a href="/" >Voltar para Home</a>
      </div>
      <div>
        <Image 
        src='/img/not-found.png' 
        alt="Not Found"
        width={300}
        height={300} />
      </div>
    </div>
  )
}