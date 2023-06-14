import 'dotenv/config'
import { cleanEnv, str } from 'envalid'

export const config = cleanEnv(process.env, {
  TOKEN: str(),
  CLIENT_ID: str(),
  GUILD_ID: str(),
})
