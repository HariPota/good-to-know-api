import { Category } from '../models/category.model';
import {NextFunction, Request, Response} from "express";

async function list(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await Category.findAll());
  } catch (err: any) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
}

export {
  list
}