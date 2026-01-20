import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4">
            <h1 className="text-7xl font-bold text-gray-900">404</h1>

            <p className="mt-4 text-xl text-gray-600">
                Página não encontrada
            </p>

            <p className="mt-2 text-gray-500 text-center max-w-md">
                A página que você tentou acessar não existe ou foi removida.
            </p>

            <Link
              href="/"
              className="mt-8 rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800 transition"
            >
                Voltar a Home
            </Link>
        </div>
    )
}