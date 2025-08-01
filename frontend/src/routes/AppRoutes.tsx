import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { Dashboard } from '../pages/Dashboard'
import { PrivateRoute } from './PrivateRoutes'

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />

                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<SignIn />} />
            </Routes>
        </Router>
    )
}
