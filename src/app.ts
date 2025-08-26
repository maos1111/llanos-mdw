import 'dotenv/config';
import express, { Request, Response } from 'express';
import { connectToDatabase } from './database';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.static('public'));

connectToDatabase();

// Ruta de ejemplo
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hola mundo',
    port: PORT,
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
