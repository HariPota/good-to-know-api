import express, { Express, Request, Response } from 'express'
import router from '@src/routes'

export const createServer = (): Express => {
  const app: Express = express()

  app.use(express.json())
  app.use(
    express.urlencoded({
      extended: true,
    })
  )
  app.get('/', (request: Request, response: Response) => {
    response.status(200).json({message: 'ok'})
  })
  app.use('/api', router)

  /* Error handler middleware */
  app.use((error: any, request: Request, response: Response) => {
    const statusCode = error.statusCode || 500
    console.error(error.message, error.stack)
    response.status(statusCode).json({message: error.message})
    return
  })

  return app
}