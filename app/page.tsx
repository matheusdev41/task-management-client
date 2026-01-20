import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle, 
} from "@/components/ui/card"


export default function Home(){
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      {/* Hero */}
      <section className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">
          Bem vindo ao seu sistema
        </h1>

        <p className="mt-4 text-muted-foreground">
           Gerencie dados, acompanhe métricas e organize suas informações em um único lugar
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button asChild>
              <Link href="/dashboard">Acessar Dashboard</Link>
          </Button>

          <Button variant="outline">
              Saiba mais
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
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
