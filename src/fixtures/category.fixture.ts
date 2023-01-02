import 'module-alias/register'
import { Category } from '@src/models/category.model'

(async () => {
  await Category.create({
    id: 1,
    name: 'Category'
  })
})()