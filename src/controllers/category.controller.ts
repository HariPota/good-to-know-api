import { Category } from '../models/category.model'
import { NextFunction, Request, Response } from 'express'
import { Route, Get} from 'tsoa'


@Route('categories')
export default class CategoryController {
  @Get('/')
  public async list(): Promise<{ message: string }> {
    return {
      message: 'pong',
    }
  }
}