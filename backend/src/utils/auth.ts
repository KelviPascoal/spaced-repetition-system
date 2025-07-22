// src/utils/auth.ts
import jwt, { JwtPayload, SignOptions, Secret } from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config()

const JWT_SECRET: Secret = process.env.JWT_SECRET || ''
if (!JWT_SECRET) throw new Error('JWT_SECRET não definido')


export function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10)
}

export function comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash)
}

export function generateToken(payload: object): string {
    const options: SignOptions = { expiresIn: '1d' }
    return jwt.sign(payload, JWT_SECRET, options)
}

export function verifyToken(token: string): string | JwtPayload {
    return jwt.verify(token, JWT_SECRET)
}
