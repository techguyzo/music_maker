const express = require('express')
const logger = require('./utils/logger')
const { getUser, registerUser, getAllUsers } = require('./prisma/prisma')

const { PORT } = process.env

const app = express()
app.use(express.json())

app.listen(PORT || 8080, () => {
  logger.info('Server started at PORT 8080')
})

// landing page
app.get('/', (req, res) => {
  res.send('Hello from express')
})

app.post('/register', async (req, res) => {
  try {
    const { name, username, email, password } = req.body
    const user = await registerUser(name, username, email, password)
    res.status(200).send({ user })
  } catch (e) {
    logger.error({ message: e.message })
    res.status(500).send({
      statusCode: 'MA001',
      message: 'Internal Server Error',
    })
  }
})

app.post('/login', async (req, res) => {
  const { username, email, password } = req.body
  const data = (await getUser())[0]
  if (username && email && password) {
    if (username === data.username) {
      res.status(200).send('Login successfull')
    } else {
      logger.error('Unauthorized')
      res.status(401).send('Unauthorized')
    }
  } else {
    res.status(500).send('Internal Server Error')
  }
})

app.post('/logout', (req, res) => {
  const { token, username } = req.body
  if (token && username) {
    // todo query database
    res.status(200).send('Logged out')
  } else {
    res.status(404).send('Unauthorized')
  }
})

app.get('/all-users', async (req, res) => {
  const users = await getAllUsers()
  res.status(200).send({ users })
})
