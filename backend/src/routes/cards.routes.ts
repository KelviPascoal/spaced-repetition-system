import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = Router()

// Criar um novo card dentro de um deck
router.post('/', async (req, res) => {
    const userId = req.user?.id
    const { deckId, front, back } = req.body

    const deck = prisma.deck.findFirst({ where: { userId, id: deckId } })

    if (!deck) return res.status(403).json({ error: 'Você não tem permissão para adicionar cards neste deck' })

    try {
        const card = await prisma.card.create({
            data: { front, back, deckId }
        })
        res.status(201).json(card)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar card' })
    }
})

// Buscar um card específico
router.get('/:cardId', async (req, res) => {
    const userId = req.user?.id
    const { cardId } = req.params
    try {
        const card = await prisma.card.findUnique({
            where: { id: Number(cardId), deck: { userId } }
        })

        if (!card) return res.status(404).json({ error: 'Card não encontrado' })
        res.status(200).json(card)

    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar card' })
    }
})

// Atualizar um card
router.put('/:cardId', async (req, res) => {
    const userId = req.user?.id
    const { cardId } = req.params
    const { front, back } = req.body
    try {
        const updated = await prisma.card.update({
            where: { id: Number(cardId), deck: { userId } },
            data: { front, back }
        })
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar card' })
    }
})

// Deletar um card
router.delete('/:cardId', async (req, res) => {
    const userId = req.user?.id
    const { cardId } = req.params
    try {
        await prisma.card.delete({ where: { id: Number(cardId), deck: { userId } } })
        res.status(204).send()
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar card' })
    }
})

export default router
