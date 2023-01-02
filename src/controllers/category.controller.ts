import { Category } from '@src/models/category.model'
import { NextFunction, Request, Response } from 'express'
import { RequestBody } from '@src/types/request'
import { CategoryPostRequest } from '@src/requests/category-schema.definition'

const list = async (request: Request, response: Response, next: NextFunction) => {
  try {
    response.status(200).json(await Category.findAll())
  } catch (err: any) {
    console.error('Error while getting categories ', err.message)
    next(err)
  }
}

const create = async (request: RequestBody<CategoryPostRequest>, response: Response, next: NextFunction) => {
  try {
    await Category.create(request.body)
    response.status(201).json({})
  } catch (err: any) {
    console.error('Error while getting categories ', err.message)
    next(err)
  }
}

export { list, create }
