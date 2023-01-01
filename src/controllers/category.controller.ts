import { Category } from '@src/models/category.model'
import { NextFunction, Request, Response } from 'express'

const list = async (request: Request, response: Response, next: NextFunction) => {
  try {
    response.status(200).json(await Category.findAll())
  } catch (err: any) {
    console.error('Error while getting categories ', err.message)
    next(err)
  }
}

export { list }
