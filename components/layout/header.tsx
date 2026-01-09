import Image from "next/image";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import Pesquisa from "@/components/layout/pesquisa";



export default function Header() {

  return (
    <header className="flex max-w-full items-center justify-between rounded-lg px-18 py-5">
      <Image
        src="/img/starbPerfection.webp"
        alt="Logo da Star B"
        width={150}
        height={80}
        className="m-0 p-0"
      />
      <nav className="flex flex-row justify-end gap-10">
        <div>
          <Pesquisa />
        </div>
        <a href="/" className={cn(buttonVariants({ variant: "link" }), "text-lg font-medium")}>
          Home
        </a>
        <a href="/sobre" className={cn(buttonVariants({ variant: "link" }), "text-lg font-medium")}>
          Sobre
        </a>
        <a href="/livros" className={cn(buttonVariants({ variant: "link" }), "text-lg font-medium")}>
          Livros
        </a>
        <a
          href="/livros/artigo"
          className={cn(buttonVariants({ variant: "link" }), "text-lg font-medium")}
        >
          Artigos
        </a>
      </nav>
    </header>
  );
}
