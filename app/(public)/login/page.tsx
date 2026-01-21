"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    console.log("API:", process.env.NEXT_PUBLIC_API_URL)


    async function handleLogin(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        })

        if (!res.ok) {
            alert("Credenciais inválidas")
            setLoading(false)
            return
        }

        const data = await res.json()
        localStorage.setItem("token", data.access_token)

        router.push("../../home")
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
           <Card className="w-full max-w-md">
             <CardHeader className="space-y-2 pb-6">
                <CardTitle className="text-center text-3xl font-bold mt-4">
                    Entrar no Sistema
                </CardTitle>
             </CardHeader>

             <CardContent className="px-6 pb-8">
                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="senha">Senha</Label>
                        <Input 
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-11 text-base"
                      disabled={loading}
                    >
                        {loading ? "Entrando..." : "Entrar"}
                    </Button>
                </form>
             </CardContent>
            </Card>       
        </main>
    )
}