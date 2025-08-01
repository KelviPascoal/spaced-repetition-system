import { useAuth } from '../../contexts/AuthContex'
import { useNavigate } from 'react-router-dom'

export const SignIn = () => {
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleLogin = () => {
        login()
        navigate('/dashboard')
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Entrar</button>
        </div>
    )
}
