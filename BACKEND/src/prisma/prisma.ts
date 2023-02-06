import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

prisma.$connect()

export const getUser: any = async () => prisma.users.findMany()

// const getToken = async () => {
//   const token = await prisma.users.
// }

export const registerUser = async (
  name: string,
  username: string,
  email: string,
  password: string,
) => {
  return prisma.users.create({
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
  return prisma.users.findMany({
    where: { is_active: true },
  })
}
