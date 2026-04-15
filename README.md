<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<p align="center">
  API desarrollada con <b>NestJS</b> para la gestión de estaciones y bitácoras operativas.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/backend-NestJS-red" />
  <img src="https://img.shields.io/badge/database-PostgreSQL-blue" />
  <img src="https://img.shields.io/badge/ORM-Prisma-green" />
  <img src="https://img.shields.io/badge/auth-JWT-orange" />
</p>

---

## 📄 Descripción

Este proyecto consiste en una API backend para la gestión de estaciones y bitácoras operativas.  
Incluye autenticación mediante JWT, control de acceso por roles y almacenamiento de datos en PostgreSQL utilizando Prisma y Supabase.

---

## 📦 Instalación del proyecto

```bash
npm install
```

---

## ⚙️ Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
# Connect to Supabase via connection pooling
DATABASE_URL="postgresql://postgres.gjgcdykmerahusotxibb:3317017364Ab@aws-1-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

# Direct connection to the database (migraciones)
DIRECT_URL="postgresql://postgres.gjgcdykmerahusotxibb:3317017364Ab@aws-1-us-east-1.pooler.supabase.com:5432/postgres"

# JWT
JWT_SECRET=3317017364Ab
JWT_ACCESS_EXPIRES=15m
JWT_REFRESH_SECRET=3317017364Ab
JWT_REFRESH_EXPIRES=7d
```

---

## 🏗️ Compilación del proyecto

```bash
npm run build
```

---

## ▶️ Ejecución del proyecto

```bash
# desarrollo
npm run start:dev

# producción
npm run start:prod
```

---

## 🔐 Configuración de CORS

En el archivo `main.ts`:

```ts
app.enableCors({
  origin: ['http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
});
```

---

## 🗄️ Base de datos

- PostgreSQL  
- Prisma ORM  
- Supabase  

```bash
npx prisma migrate deploy
```

---

## ☁️ Despliegue

```bash
git clone <repo>
cd proyecto

npm install
npm run build
npm run start:prod
```

---

## 🧪 Pruebas

```bash
npm run test
```

---

## 📄 Licencia

MIT
