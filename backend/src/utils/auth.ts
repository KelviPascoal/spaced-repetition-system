import jwt, { JwtPayload, SignOptions, Secret } from 'jsonwebtoken'

import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

type SignProps = {
    userId: string
}

dotenv.config()

const JWT_SECRET: Secret = process.env.JWT_SECRET || ''

if (!JWT_SECRET) throw new Error('JWT_SECRET não definido')


export function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10)
}

export function comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash)
}

export function generateToken(payload: SignProps): string {
    const options: SignOptions = { expiresIn: '1d' }
    return jwt.sign(payload, JWT_SECRET, options)
}

export function verifyToken(token: string): string | JwtPayload {
    return jwt.verify(token, JWT_SECRET)
}

export function getUserIdFromToken(token: string): string | null {
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload

        // Garante que o ID está presente e é uma string ou número
        if (decoded && typeof decoded === 'object' && decoded.id) {
            return String(decoded.id)
        }

        return null
    } catch (error) {
        console.error('Token inválido:', error)
        return null
    }
}
