import { JSX } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContex'

type Props = {
    children: JSX.Element
}

export const PrivateRoute = ({ children }: Props) => {
    const { isAuthenticated } = useAuth()
    return isAuthenticated ? children : <Navigate to="/login" />
}
