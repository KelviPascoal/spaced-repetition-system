# 🔐 Autenticação da API

Sistema de autenticação com **login via email ou username**, usando JWT e senhas com bcrypt.

---

## 📌 Endpoints

### 📝 Registro de Usuário

**POST** `/auth/register`

Cria um novo usuário.

#### ✅ Requisição:
```json
{
  "email": "john@example.com",
  "name": "John",
  "username": "john123",
  "password": "123456"
}
📤 Resposta:
json
Copiar
Editar
{
  "token": "JWT_TOKEN",
  "user": {
    "id": "uuid",
    "name": "John",
    "email": "john@example.com",
    "username": "john123"
  }
}
🔑 Login
POST /auth/login

Autentica o usuário por email ou username, junto da senha.

✅ Requisição (usando email):
json
Copiar
Editar
{
  "identifier": "john@example.com",
  "password": "123456"
}
✅ Requisição (usando username):
json
Copiar
Editar
{
  "identifier": "john123",
  "password": "123456"
}
📤 Resposta:
json
Copiar
Editar
{
  "token": "JWT_TOKEN",
  "user": {
    "id": "uuid",
    "name": "John",
    "email": "john@example.com",
    "username": "john123"
  }
}
🔒 Rota Protegida
GET /me

Retorna os dados do usuário autenticado com base no JWT enviado.

🔐 Cabeçalhos:
makefile
Copiar
Editar
Authorization: Bearer JWT_TOKEN
📤 Resposta:
json
Copiar
Editar
{
  "id": "uuid",
  "name": "John",
  "email": "john@example.com",
  "username": "john123"
}
⚙️ Ambiente .env
env
Copiar
Editar
JWT_SECRET=uma-chave-secreta-bem-forte
JWT_EXPIRES_IN=1d
🔧 Segurança
Senhas são armazenadas com hash bcrypt.

Tokens são gerados com jsonwebtoken e expiram conforme configurado.

Middleware protege rotas privadas validando o token.

Este módulo de autenticação é desacoplado e pode ser integrado facilmente a qualquer API com suporte a Express + Prisma.

yaml
Copiar
Editar

