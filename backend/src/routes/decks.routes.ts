import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = Router()

// Criar um novo deck para um usuário
router.post('/', async (req, res) => {
    const { title, description } = req.body
    const userId = req.user?.id
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
router.get('/user', async (req, res) => {
    const userId = req.user?.id
    try {
        const decks = await prisma.deck.findMany({
            where: { userId },
        })
        res.status(200).json(decks)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar decks' })
    }
})

// Buscar um deck específico por ID
router.get('/:deckId', async (req, res) => {
    const userId = req.user?.id
    const { deckId } = req.params
    try {
        const deck = await prisma.deck.findUnique({
            where: { id: Number(deckId), userId },
            include: { cards: true }
        })
        if (!deck) return res.status(404).json({ error: 'Deck não encontrado' })
        res.status(200).json(deck)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar deck' })
    }
})

// Atualizar um deck
router.put('/:deckId', async (req, res) => {
    const userId = req.user?.id
    const { deckId } = req.params
    const { title, description } = req.body
    try {
        const updatedDeck = await prisma.deck.update({
            where: { id: Number(deckId), userId },
            data: { title, description }
        })
        res.status(200).json(updatedDeck)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar deck' })
    }
})

// Deletar um deck e seus cards
router.delete('/:deckId', async (req, res) => {
    const userId = req.user?.id
    const { deckId } = req.params
    try {
        await prisma.deck.delete({ where: { id: Number(deckId), userId: userId } })
        res.status(204).send()
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar deck' })
    }
})

export default router
