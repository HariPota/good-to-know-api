import express from 'express'
import { list } from '@src/controllers/category.controller'

const router = express.Router()

router.get('/categories', list)

export default router
