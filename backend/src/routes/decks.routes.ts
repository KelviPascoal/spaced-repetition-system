import { Request, Router } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = Router()

// Criar um novo deck para um usuário
router.post('/', async (req, res) => {
    const { title, description } = req.body
    const { userId } = req
    try {
        const deck = await prisma.deck.create({
            data: {
                title,
                description,
                userId: String(userId)
            }
        })
        res.status(201).json(deck)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar deck' })
    }
})

// Buscar todos os decks de um usuário
router.get('/user/', async (req, res) => {
    const { userId } = req
    try {
        const decks = await prisma.deck.findMany({
            where: { userId },
        })
        res.json(decks)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar decks' })
    }
})

// Buscar um deck específico por ID
router.get('/:deckId', async (req, res) => {
    const { deckId } = req.params
    try {
        const deck = await prisma.deck.findUnique({
            where: { id: deckId },
            include: { cards: true }
        })
        if (!deck) return res.status(404).json({ error: 'Deck não encontrado' })
        res.json(deck)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar deck' })
    }
})

// Atualizar um deck
router.put('/:deckId', async (req, res) => {
    const { deckId } = req.params
    const { title, description } = req.body
    try {
        const updatedDeck = await prisma.deck.update({
            where: { id: deckId },
            data: { title, description }
        })
        res.json(updatedDeck)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar deck' })
    }
})

// Deletar um deck e seus cards
router.delete('/:deckId', async (req, res) => {
    const { deckId } = req.params
    try {
        await prisma.card.deleteMany({ where: { deckId } })
        await prisma.deck.delete({ where: { id: deckId } })
        res.status(204).send()
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar deck' })
    }
})

export default router
