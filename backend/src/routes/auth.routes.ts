// src/routes/auth.ts
import express from 'express'
import { PrismaClient } from '@prisma/client'
import { hashPassword, comparePassword, generateToken } from '../utils/auth'

const router = express.Router()
const prisma = new PrismaClient()

router.post('/register', async (req, res) => {
    const { email, name, username, password } = req.body

    const existingUser = await prisma.user.findFirst({
        where: {
            OR: [{ email }, { username }]
        }
    })
    if (existingUser) {
        return res.status(400).json({ error: 'Email ou username já em uso' })
    }

    const hashed = await hashPassword(password)

    const user = await prisma.user.create({
        data: { email, name, username, password: hashed }
    })

    const token = generateToken({ userId: user.id })
    res.json({
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            username: user.username
        }
    })
})

router.post('/login', async (req, res) => {
    const { identifier, password } = req.body

    const user = await prisma.user.findFirst({
        where: {
            OR: [{ email: identifier }, { username: identifier }]
        }
    })

    if (!user) {
        return res.status(400).json({ error: 'Credenciais inválidas' })
    }

    const valid = await comparePassword(password, user.password)
    if (!valid) {
        return res.status(400).json({ error: 'Credenciais inválidas' })
    }

    const token = generateToken({ userId: user.id })
    res.json({
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            username: user.username
        }
    })
})

export default router