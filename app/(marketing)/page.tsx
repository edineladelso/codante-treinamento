import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <section className="text-center min-h-screen flex flex-col items-center gap-2">
      <h1 className="font-display w-xl text-4xl font-bold ">
        Flexibilize as buscas <br /> por material acadêmico
      </h1>

      <Image
        src="/img/imglivros.webp"
        alt="robotica enxame"
        width="700"
        height={400}
      />
    </section>
  );
}
