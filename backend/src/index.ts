import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes'
import deckRoutes from './routes/decks.routes'
import cardRoutes from './routes/cards.routes'
import { authenticateJWT } from './middleware/authMiddleware'

dotenv.config()

const app = express()
app.use(express.json())

app.use('/auth', authRoutes)

// Exemplo de rota protegida
app.get('/me', authenticateJWT, async (req, res) => {
    res.json({ message: `Usuário autenticado: ${req.userId}` })
})

// Middleware de autenticação global, exceto para /auth
app.use((req, res, next) => {
    if (req.path.startsWith('/auth')) {
        return next()
    }
    authenticateJWT(req, res, next)
})

app.use('/decks', deckRoutes)
app.use('/cards', cardRoutes)




app.listen(4000, () => console.log('Servidor rodando na porta 4000'))
