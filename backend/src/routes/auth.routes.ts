// src/routes/auth.ts
import express from 'express'
import { PrismaClient } from '@prisma/client'
import { hashPassword, comparePassword, generateToken } from '../utils/auth'

const router = express.Router()
const prisma = new PrismaClient()

router.post('/register', async (req, res) => {
    const { email, name, password } = req.body

    const existingUser = await prisma.user.findFirst({
        where: { email }
    })
    if (existingUser) {
        return res.status(400).json({ error: 'Email já está sendo usado' })
    }

    const hashed = await hashPassword(password)

    const user = await prisma.user.create({
        data: { email, name, password: hashed }
    })

    const token = generateToken({ userId: user.id })
    res.json({
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        }
    })
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    const user = await prisma.user.findFirst({
        where: { email }
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
        }
    })
})

export default router