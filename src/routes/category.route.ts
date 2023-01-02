import express from 'express'
import { create, list } from '@src/controllers/category.controller'
import { requestValidator } from '@src/utils/validator.helper'
import _schema from '@src/_schema'

const router = express.Router()

router.get('/categories', list)
router.post('/categories', requestValidator(_schema.CategoryPostRequest), create)

export default router
