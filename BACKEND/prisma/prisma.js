const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const getUser = async () => prisma.users.findMany()

// const getToken = async () => {
//   const token = await prisma.users.
// }

const registerUser = async (name, username, email, password) =>
  prisma.users.create({
    name,
    username,
    email,
    password,
    is_active: true,
  })

const getAllUsers = async () => {
  let data = prisma.users.findMany({
    where: { is_active: true },
  })
  return data
}

module.exports = { getUser, registerUser, getAllUsers }
