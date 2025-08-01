import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContex'

export const Dashboard = () => {
    const { logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Sair</button>
        </div>
    )
}
