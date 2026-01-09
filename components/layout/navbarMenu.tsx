"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function NavigationMenuDemo() {
  const isMobile = useIsMobile()

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                    href="/"
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4">
                      Bivlioteca Star B
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      A biblioteca definitiva para estudantes e profissionais de
                      engenharia e tecnologia.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/sobre" title="Informaçoes">
                Saiba mais sobre a nossa missao e valores.
              </ListItem>
              <ListItem href="sobre/tiposmanuais" title="Typos de Manuais">
                Explore os diversos tipos de manuais disponiveis.
              </ListItem>
              <ListItem href="/contato" title="Contato">
                Entre em contato conosco para suporte ou perguntas.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Softwares</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Documentaçao</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="https://docs.python.org/pt-br/3/">
                    <div className="font-medium">Python</div>
                    <div className="text-muted-foreground">
                      Documentação oficial do Python em portugues do brazil.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="https://learn.microsoft.com/pt-pt/cpp/cpp/?view=msvc-170">
                    <div className="font-medium">c++</div>
                    <div className="text-muted-foreground">
                      Documentação de c++ em portugues de portugal pela microsoft.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
                    <div className="font-medium">Javascript</div>
                    <div className="text-muted-foreground">
                      Documentação oficial do Javascript em portugues do brazil, pela Mozilla.
                    </div>
                  </Link>
                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                  <Link href="https://docs.espressif.com/projects/esp-idf/en/latest/esp32/index.html">
                    <div className="font-medium">Esp32</div>
                    <div className="text-muted-foreground">
                      Documentação oficial do Esp32 em portugues do brazil, pela Espressif.
                    </div>
                  </Link>
                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                  <Link href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
                    <div className="font-medium">css</div>
                    <div className="text-muted-foreground">
                      Documentação oficial do css em portugues do brazil, pela Mozilla.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/livros">Livros</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Documentaçao</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/softwares">Softwares</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/livros/artigos">Artigos</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Tema</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleIcon />
                    Light
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleCheckIcon />
                    Dark
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
