import Image from "next/image";
import { Instagram, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-black text-white
    flex justify-between max-w-full w-full
    py-4 m-auto px-30
    "
    >
      <div className="max-w-sm">
        <Image
          src="/img/starbdarkFinal.webp"
          alt="Logo da Star B"
          width={150}
          height={50}
          className="rounded-xl bg-amber-50 p-1.5"
        />
        <p className="mt-2 font-extralight text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
          voluptatibus ea vitae debitis eius reprehenderit dolor adipisci
        </p>
      </div>
      <div className="flex gap-4 ">
        <Instagram className="cursor-pointer hover:text-blue-400"/>
        <Github className="cursor-pointer hover:text-blue-400"/>
        <Mail className="cursor-pointer hover:text-blue-400"/>
      </div>
    </footer>
  );
}
