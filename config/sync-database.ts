import 'module-alias/register'
import sequelize from '@src/services/db.service'
import { syncCategory } from '@src/models/category.model'
import { syncPost } from '@src/models/post.model'

(async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
})();

(async () => {
  await syncCategory()
  await syncPost()
})()
