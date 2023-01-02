import Ajv from 'ajv'
import { NextFunction } from 'express'

const ajv = new Ajv()

// validation middleware
const requestValidator = (schema: object) => {
  const validate = ajv.compile(schema)
  return (request: any, response: any, next: NextFunction) => {
    if (!validate(request.body)) return response.status(400).json(validate.errors)
    return next()
  }
}


export { requestValidator }