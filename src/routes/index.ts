import express from 'express'
import category from './category.route'

const router = express.Router()

router.use(category)

export default router
