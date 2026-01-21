import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="mx-auto max-w-5xl px-6 py-16">
            {/* Header */}
            <section className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight">
                    Sobre o sistema
                </h1>
                <p className="mt-4 text-muted-foreground max-w-2xl">
                    Este Sistema foi desenvolvido para facilitar o gerenciamento de dados,
                    oferecendo uma interface simples, moderna e eficiente.
                </p>
            </section>

            {/* Features */}
            <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Gerenciamento</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        Controle total de informações, tarefas e métricas em um único lugar.
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Interface Moderna</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        Layout responsivo, acessível e compatível com dark mode.
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Tecnologias Atuais</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        Desenvolvido com Next.js, shadcn/ui e arquitetura preparada para escalar
                    </CardContent>
                </Card>

                {/* CTA */}
                <section className="mt-16 flex justify-center">
                    <Button asChild>
                        <Link href="/dashboard">Ir para o Dashboard</Link>
                    </Button>
                </section>
            </section>
        </main>
    )
}