# Proyecto Back Tom

Este proyecto es un backend desarrollado en Node.js con Express y MongoDB para gestionar usuarios y productos de una tienda de ropa. Incluye autenticación con JWT, encriptación de contraseñas con bcrypt y operaciones CRUD para productos protegidas por middleware de validación de token.

## Descripción general

Se creó una API REST para:

- Registrar nuevos usuarios
- Iniciar sesión con email y contraseña
- Obtener, crear, actualizar y eliminar productos
- Proteger rutas sensibles con autenticación
- Conectar la aplicación a una base de datos MongoDB mediante Mongoose

## Stack tecnológico

- Node.js
- Express
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcrypt
- CORS
- dotenv

## Estructura del proyecto

```text
Proyecto-Back-Tom/
├── index.js
├── package.json
├── README.md
├── src/
│   ├── Middleware/
│   │   └── auth.middleware.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── producto.controller.js
│   ├── models/
│   │   ├── Productos.js
│   │   └── Usuarios.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── routesProductos.js
│   ├── seeders/
│   │   └── producto.seeder.js
│   └── utils/
│       └── token.generator.js
└── .env
```

## Funcionalidades implementadas

### Autenticación de usuarios

Se configuró un sistema de registro e inicio de sesión con estas tareas:

- Validación de email y contraseña
- Verificación si el usuario ya existe
- Hash de contraseña con bcrypt
- Generación de token JWT para sesiones autenticadas
- Middleware para validar el token en rutas protegidas

### Gestión de productos

La API permite:

- Listar todos los productos
- Obtener un producto por ID
- Crear un producto
- Actualizar un producto
- Eliminar un producto

### Middleware de seguridad

El middleware `authMidd` valida la cabecera `Authorization` y comprueba que el JWT sea válido antes de permitir el acceso a rutas privadas.

## Rutas principales

### Autenticación

```http
POST /api/auth/register
POST /api/auth/login
```

### Productos

```http
GET /api/producto/
GET /api/producto/:id
POST /api/producto/
PUT /api/producto/:id
DELETE /api/producto/:id
```

> Las rutas de productos están protegidas por autenticación, excepto la lectura general del listado.

## Variables de entorno

El proyecto usa un archivo `.env` con variables como:

```env
MONGODB_URI=mongodb://localhost:27017/tu_base
jwt_secret=tu_clave_secreta
PORT=3001
```

## Instalación

1. Clona el repositorio.
2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` con tus credenciales de MongoDB y JWT.
4. Inicia la API:

```bash
npm start
```

Modo desarrollo:

```bash
npm run dev
```

## Ejemplo de uso

### Registrar usuario

```http
POST http://localhost:3001/api/auth/register
Content-Type: application/json

{
  "email": "usuario@correo.com",
  "password": "123456"
}
```

### Iniciar sesión

```http
POST http://localhost:3001/api/auth/login
Content-Type: application/json

{
  "email": "usuario@correo.com",
  "password": "123456"
}
```

### Crear producto

```http
POST http://localhost:3001/api/producto/
Authorization: Bearer <token>
Content-Type: application/json

{
  "nombre": "Camisa",
  "categoria": "Ropa",
  "descripcion": "Camisa de algodón",
  "precio": 15000,
  "talle": ["S", "M", "L"],
  "color": "Blanco",
  "imagen": "https://example.com/camisa.jpg",
  "stock": 20
}
```

## Resultado final

Este backend quedó desarrollado como una API funcional para gestionar usuarios y productos, con seguridad, validaciones y conexión a MongoDB. Es una base sólida para continuar con frontend, administración de inventario o extensión de funcionalidades.

## Autor

Tomas Gallardo
