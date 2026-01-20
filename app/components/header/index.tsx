import Link from "next/link"


export function Header() {
    return (
        <header className="bg-black text-white px-8 py-4">
            <nav className="flex items-center justify-between">
                <div className="text-xl font-bold">
                    <Link href="/">Next.js</Link>
                </div>

                <ul className="flex gap-6">
                    <li>
                        <Link
                          href="/"
                          className="houver:text-gray-300 transition-colors"  
                        >
                          Home
                        </Link>
                    </li>
                    <li>
                        <Link
                          href="/dashboard"
                          className="houver:text-gray-300 transition-colors"
                        >
                            Dashboard
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}