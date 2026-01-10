import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export const metadata: Metadata = {
  title: "StarB Vagas",
  description:
    "Criado no processo de aprendizagem do next js para cadastrar usuarios e fornecer funcionalidades ilustrativas para busca e gerenciamento de vagas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-pt">
      <body >
        <SidebarProvider>
          <AppSidebar />
          <div className="flex min-h-screen w-full flex-col">
            
            <Navbar />
            <main className="flex flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
