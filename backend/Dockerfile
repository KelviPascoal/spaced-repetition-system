FROM node:20-alpine

# Define diretório de trabalho
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do código (exceto arquivos ignorados no .dockerignore)
COPY . .

# Gera client do Prisma (não depende do banco ainda)
RUN npx prisma generate

# Expondo porta da API
EXPOSE 4000

# Inicializa com script robusto (espera o banco no docker-compose)
CMD ["npm", "run", "dev"]


