// src/middleware/authenticateJWT.ts
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET!

// Tipo estendido com userId


// Função auxiliar para extrair o ID do token
export function getUserIdFromToken(token: string): string {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string }
    return decoded.userId
}

// Middleware que autentica e injeta o userId
export function authenticateJWT(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Token não fornecido' })
    }

    const token = authHeader.split(' ')[1]

    try {
        const userId = getUserIdFromToken(token)
        req.user = { id: userId }
        next()
    } catch (err) {
        return res.status(403).json({ error: 'Token inválido' })
    }
}
