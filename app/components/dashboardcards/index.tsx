

export default function DashboardCards() {
    const cards = [
        { title: 'Usuários', value: 120 },
        { title: 'Vendas', value: 'R$9.450' },
        { title: 'Tarefas', value: 8 },
    ]

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card) => (
                    <div
                      key={card.title}
                      className="bg-white rounded-xl shadow p-6"
                    >
                        <p className="text-gray-500">{card.title}</p>
                        <p className="text-3xl font-bold mt-2">{card.value}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}