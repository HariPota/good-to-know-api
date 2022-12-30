import express from 'express'
import category from '@src/routes/category.route'

const router = express.Router()

router.use(category)

export default router
