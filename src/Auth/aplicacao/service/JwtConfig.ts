require('dotenv')
export const JwtConfig = {
  SECRET_PASS: `${process.env.JWT_SECRET}`
}