import express from 'express'
import { list } from '../controllers/category.controller'

const router = express.Router()

router.get('/categories', list)

export default router
