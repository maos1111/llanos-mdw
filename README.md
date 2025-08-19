# Servidor Express con TypeScript

Un servidor web básico construido con Express.js y TypeScript.

## Características

- Express.js para el servidor web
- TypeScript para tipado estático
- Nodemon para desarrollo con recarga automática
- CORS habilitado
- Variables de entorno con dotenv

## Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd mdw
```

2. Instala las dependencias:
```bash
npm install
```

## Scripts disponibles

- `npm run dev` - Ejecuta el servidor en modo desarrollo con recarga automática
- `npm run build` - Compila el proyecto TypeScript
- `npm start` - Ejecuta el servidor compilado

## Uso

### Modo desarrollo
```bash
npm run dev
```

### Modo producción
```bash
npm run build
npm start
```

El servidor se ejecutará en `http://localhost:3000`

## Estructura del proyecto

```
├── src/
│   └── app.ts          # Archivo principal del servidor
├── dist/               # Archivos compilados (generados automáticamente)
├── package.json        # Dependencias y scripts
├── tsconfig.json       # Configuración de TypeScript
├── nodemon.json        # Configuración de Nodemon
└── README.md          # Este archivo
```

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con:

```
PORT=3000
NODE_ENV=development
```
