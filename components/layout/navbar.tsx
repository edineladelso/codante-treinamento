import Image from "next/image";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <nav className="flex max-w-full items-center justify-between rounded-lg px-18 py-5">
      <Image
        src="/img/starbdarkFinal.webp"
        alt="Logo da Star B"
        width={150}
        height={80}
        className="m-0 p-0"
      />
      <nav className="flex flex-row justify-end gap-10 text-xl">
        <a href="/" className={cn(buttonVariants({ variant: "link" }))}>
          Home
        </a>
        <a href="/sobre" className={cn(buttonVariants({ variant: "link" }))}>
          Sobre
        </a>
        <a href="/vagas" className={cn(buttonVariants({ variant: "link" }))}>
          Vagas
        </a>
        <a
          href="/vagas/cadastro"
          className={cn(buttonVariants({ variant: "link" }))}
        >
          Cadastrar Vagas
        </a>
      </nav>
    </nav>
  );
}
