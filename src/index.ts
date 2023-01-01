import 'module-alias/register'
import { createServer } from '@src/utils/server.helper'
import { Express } from 'express'

const port = process.env.APP_PORT

const app: Express = createServer()

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
