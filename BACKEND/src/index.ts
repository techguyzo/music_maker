import express from 'express'
import logger from './utils/logger'
import {
  errorConstructor,
  responseConstructor,
  ErrorConstructor,
} from './utils/errorConstructor'
import './middleware/auth'
import passport from 'passport'
import session from 'express-session'

import { getUser, registerUser, getAllUsers } from './prisma/prisma'

const PORT = process.env.ENV ?? 8080

const app = express()
app.use(express.json())
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  }),
)

app.listen(PORT, () => {
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

    res
      .status(200)
      .send(responseConstructor(200, 'User Registration Successfully', user))
  } catch (err: any) {
    ErrorConstructor.prototype.construct()
    logger.error({ message: err.message })
    res.status(500).send(errorConstructor)
  }
})

app.post('/login', async (req, res) => {
  const {
    username,
    email,
    password,
  }: { username: string; email: string; password: string } = req.body
  const data = await getUser()[0]
  if (username !== '' && email !== '' && password !== '') {
    if (username === data.username) {
      res.status(200).send('Login successfully')
    } else {
      logger.error('Unauthorized')
      res.status(401).send('Unauthorized')
    }
  } else {
    res.status(500).send('Internal Server Error')
  }
})

app.post('/logout', async (req, res) => {
  const { token, username }: { token: string; username: string } = req.body
  if (token !== '' && username !== '') {
    res.status(200).send('Logged out')
  } else {
    res.status(404).send('Unauthorized')
  }
})

app.get('/all-users', async (req, res) => {
  const users = await getAllUsers()
  res.status(200).send({ users })
})

app.get('/auth', (req, res) => {
  res.send('<a href="/auth/google">Auth with Google</a>')
})
app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }),
)

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/auth/google/success',
    failureRedirect: '/auth/google/failure',
  }),
)
