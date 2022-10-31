import express from 'express'
import CategoryController from '../controllers/category.controller'

const router = express.Router()
const controller = new CategoryController()

router.get('/categories', controller.list)

export default router
