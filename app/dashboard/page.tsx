import { Metadata } from "next"
import DashboardCards from "../../components/dashboard/dashboardcards"

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Descrição dashboard'
}

export default function Dashboard() {
    return (
        <div>
            <DashboardCards />
        </div>
    )
}