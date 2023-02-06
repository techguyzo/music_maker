import jwt from 'jsonwebtoken'
import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth2'

const privateKey = process.env.PRIVATE_KEY

export const generateToken = (username: string, email: string) => {
  return jwt.sign({ username, email }, privateKey, { algorithm: 'ES256' })
}

export const verifyToken = (token: string) => {
  jwt.verify(token, privateKey, (err: string, decoded) => {
    if (err !== undefined) {
      throw new Error('Invalid token')
    }
    return decoded
  })
}

// For Google Auth

passport.use(
  new GoogleStrategy(
    {
      clientID:
        '707227260594-ejlfv4m27v749s00h7nb1213u1cv2hg5.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:8080/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, cb) => {
      cb(null, profile)
    },
  ),
)

passport.serializeUser((user, cb) => {
  cb(null, user)
})

passport.deserializeUser((user, cb) => {
  cb(null, user)
})

const auth = {
  generateToken,
  verifyToken,
}

export default auth
