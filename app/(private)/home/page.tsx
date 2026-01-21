import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle, 
} from "@/components/ui/card"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home - Gerencie suas tarefas',
  description: 'Descrição da Home',
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

export default function HomePage(){
  return (
    <main className="flex min-h-screen flex-col items-center px-6">
      {/* Hero */}
      <section className="relative flex min-h-[50vh] w-full flex-col items-center justify-center text-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/50 to-background" />
          <h1 className="text-4xl font-bold mx-10 tracking-tight md:text-5xl">
            Bem vindo ao seu sistema
          </h1>

        <p className="mt-4 max-w-xl text-muted-foreground">
           Gerencie dados, acompanhe métricas e organize suas informações em um único lugar
        </p>

        <div className="mt-8 flex gap-4">
          <Button asChild>
              <Link href="/dashboard">Acessar Dashboard</Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/about">Saiba mais</Link>
          </Button>
        </div>
      </section>

      <section className="my-14 flex items-center gap-4 text-muted-foreground">
        <div className="h-px flex-1 bg-border">
          <span className="text-sm">Tudo o que você precisa em um só lugar</span>
        </div>
      </section>

      {/* Features */}
      <section className="mb-20 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
              <CardHeader>
                <CardTitle>Organização</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Centralize todas as informações do sistema em um só lugar
              </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Produtividade</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
                Acompanhe tarefas e métricas com rapidez e clareza.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Escalabilidade</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
                Arquitetura preparada para crescer junto com o projeto
            </CardContent>
          </Card>
      </section>
    </main>
  )
}
