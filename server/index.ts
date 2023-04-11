import express from 'express';
import routes from './routes';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 4000;

// Setup middleware
app.use(express.json());
app.use(routes);

// app.get('/api/users', async (req, res) => {
//   const users = await prisma.user.findMany();
//   res.send(users);
// });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
