import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes'
import { authenticateJWT, AuthenticatedRequest } from './middleware/authMiddleware'

dotenv.config()

const app = express()
app.use(express.json())

app.use('/auth', authRoutes)

// Exemplo de rota protegida
app.get('/me', authenticateJWT, async (req: AuthenticatedRequest, res) => {
    res.json({ message: `Usuário autenticado: ${req.userId}` })
})

app.listen(4000, () => console.log('Servidor rodando na porta 4000'))
