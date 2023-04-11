import express from 'express';
import { User } from '@prisma/client';
import { getAllUsers, getUserById, createUser } from '../models/user';

const router = express.Router();

router.post('/', async (req, res) => {
  const user: User = req.body;
  const newUser = await createUser(user);
  res.json(newUser);
});

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const user = await getUserById(id);
  res.json(user);
});

router.get('/', async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
});

export default router;
