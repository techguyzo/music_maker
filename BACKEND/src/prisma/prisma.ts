import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getUser: any = async userid => await prisma.users.findFirst(userid)

export const registerUser = async (
  name: string,
  username: string,
  email: string,
  password: string,
) => {
  return await prisma.users.create({
    data: {
      email,
      is_active: true,
      name,
      password,
      username,
    },
  })
}

export const getAllUsers = async () => {
  return await prisma.users.findMany({
    where: { is_active: true },
  })
}

export const findOrCreateUser = async username => {
  return await prisma.users.findFirst({ where: { username } })
}
