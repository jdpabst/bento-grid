import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/health', (_req, res) => {
 return res.status(200).send('ok')
})

router.get('/users', async (req: Request, res: Response) => {
 try {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
 } catch (error) {
  console.error(error);
  res.status(500).send('Internal Server Error');
 }
});

router.get('/text', async (req: Request, res: Response) => {
 try {
  const text = await prisma.text.findMany();
  res.status(200).json(text);
 } catch (error) {
  res.status(500).send('Internal Server Error');
 }
})

export default router;