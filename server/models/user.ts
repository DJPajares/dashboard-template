import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllUsers = async (): Promise<User[]> => {
  const users = await prisma.user.findMany();
  return users;
};

export const getUserById = async (id: number): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: {
      id
    }
  });
  return user;
};

export const createUser = async (data: User): Promise<User> => {
  const user = await prisma.user.create({
    data
  });
  return user;
};
