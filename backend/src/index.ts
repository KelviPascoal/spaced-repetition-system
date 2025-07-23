import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes'
import deckRoutes from './routes/decks.routes'
import cardRoutes from './routes/cards.routes'
import { authenticateJWT, AuthenticatedRequest } from './middleware/authMiddleware'

dotenv.config()

const app = express()
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/decks', deckRoutes)
app.use('/cards', cardRoutes)


// Exemplo de rota protegida
app.get('/me', authenticateJWT, async (req: AuthenticatedRequest, res) => {
    res.json({ message: `Usuário autenticado: ${req.userId}` })
})

app.listen(4000, () => console.log('Servidor rodando na porta 4000'))
