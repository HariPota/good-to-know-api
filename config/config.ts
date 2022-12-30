import dotenv from 'dotenv'

interface ConfigInterface {
  db: {
    host: string
    user: string
    password: string
    database: string
    port: number
  }
  listPerPage: number
}

dotenv.config()

const config: ConfigInterface = {
  db: {
    host: process.env.DB_HOST!,
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    port: Number(process.env.DB_PORT),
  },
  listPerPage: 11,
}

export default config
