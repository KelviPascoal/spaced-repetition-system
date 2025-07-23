import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = Router()

// Criar um novo card dentro de um deck
router.post('/', async (req, res) => {
    const { deckId, front, back } = req.body
    try {
        const card = await prisma.card.create({
            data: { front, back, deckId }
        })
        res.status(201).json(card)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar card' })
    }
})

// Buscar todos os cards de um deck
router.get('/deck/:deckId', async (req, res) => {
    const { deckId } = req.params
    try {
        const cards = await prisma.card.findMany({
            where: { deckId }
        })
        res.json(cards)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar cards' })
    }
})

// Buscar um card específico
router.get('/:cardId', async (req, res) => {
    const { cardId } = req.params
    try {
        const card = await prisma.card.findUnique({
            where: { id: cardId }
        })
        if (!card) return res.status(404).json({ error: 'Card não encontrado' })
        res.json(card)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar card' })
    }
})

// Atualizar um card
router.put('/:cardId', async (req, res) => {
    const { cardId } = req.params
    const { front, back } = req.body
    try {
        const updated = await prisma.card.update({
            where: { id: cardId },
            data: { front, back }
        })
        res.json(updated)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar card' })
    }
})

// Deletar um card
router.delete('/:cardId', async (req, res) => {
    const { cardId } = req.params
    try {
        await prisma.card.delete({ where: { id: cardId } })
        res.status(204).send()
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar card' })
    }
})

export default router
