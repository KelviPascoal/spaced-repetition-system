FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Gera o client Prisma
RUN npx prisma generate

EXPOSE 4000

CMD ["npm", "run", "dev"]
