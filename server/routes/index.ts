import express from 'express';
import userRouter from './user';

const router = express.Router();

router.use('/api/user', userRouter);

export default router;
