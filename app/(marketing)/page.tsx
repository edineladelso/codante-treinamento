import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <section className="text-center min-h-screen flex flex-col items-center gap-11">
      <h1 className="font-display w-xl text-4xl font-bold m-6">
        Flexibilize as buscas <br /> por material acadêmico
      </h1>

      <Image
        src="/img/img0114.jpg"
        alt="robotica enxame"
        width="500"
        height={500}
        className=" rounded-4xl"
      />
    </section>
  );
}
