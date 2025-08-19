import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// Ruta de ejemplo
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: '¡Hola mundo! Servidor Express con TypeScript funcionando.',
  });
});

// Middleware de manejo de errores
app.use((err: Error, req: Request, res: Response, next: any) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal!' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

export default app;
