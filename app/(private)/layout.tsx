import { Metadata } from "next";
import "../globals.css";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: 'Gerencie suas tarefas',
  description: 'Descrição da page',
  openGraph: {
    title: 'Task Management - Organize tarefas e aumente sua produtividade',
    description: 'Gerencie tarefas, organize projetos e acompanhe sua produtividade em um sistema simples rápido e eficiente'
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot:{
      index: true,
      follow: true, 
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      {children}
    </main>
        

  );
}
