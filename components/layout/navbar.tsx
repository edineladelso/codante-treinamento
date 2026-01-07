import Image from "next/image"

export default function Navbar(){
  return (
    <nav className="flex max-w-full border-s-zinc-100">
      <Image src="/img/starb.png" alt="Logo da Star B" width={100} height={80}/>
      <ul className="flex flex-row justify-end gap-5">
        <li>Home</li>
        <li>Sobre</li>
        <li>Vagas</li>
        <li>Cadastrar Vagas</li>
      </ul>
    </nav>
  )
}