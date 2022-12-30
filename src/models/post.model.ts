import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute
} from 'sequelize'
import sequelize from '@src/services/db.service'
import { Category } from '@src/models/category.model'

class Post extends Model<InferAttributes<Post>, InferCreationAttributes<Post>> {
  declare id: CreationOptional<number>
  declare title: string
  declare content: string
  declare categoryId: ForeignKey<Category['id']>

  declare owner?: NonAttribute<Category>
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'post', // We need to choose the model name
  }
)

const syncPost = async () => {
  await sequelize.sync()
}

export { Post, syncPost }
