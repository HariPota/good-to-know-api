import {
  Association,
  CreationOptional,
  DataTypes,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin,
  HasManyGetAssociationsMixin,
  HasManyHasAssociationMixin, HasManyHasAssociationsMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  HasManySetAssociationsMixin,
  InferAttributes,
  InferCreationAttributes,
  Model
} from 'sequelize'
import sequelize from '@src/services/db.service'
import { Post } from '@src/models/post.model'

class Category extends Model<InferAttributes<Category>, InferCreationAttributes<Category>> {
  declare id: CreationOptional<number>
  declare name: string
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  declare getPosts: HasManyGetAssociationsMixin<Post>
  declare addPost: HasManyAddAssociationMixin<Post, number>
  declare addPosts: HasManyAddAssociationsMixin<Post, number>
  declare setPosts: HasManySetAssociationsMixin<Post, number>
  declare removePost: HasManyRemoveAssociationMixin<Post, number>
  declare removePosts: HasManyRemoveAssociationsMixin<Post, number>
  declare hasPost: HasManyHasAssociationMixin<Post, number>
  declare hasPosts: HasManyHasAssociationsMixin<Post, number>
  declare countPosts: HasManyCountAssociationsMixin
  declare createPost: HasManyCreateAssociationMixin<Post, 'categoryId'>

  declare static associations: {
    posts: Association<Category, Post>;
  }
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'category', // We need to choose the model name
  }
)

Category.hasMany(Post, {
  sourceKey: 'id',
  foreignKey: 'categoryId',
  as: 'posts' // this determines the name in `associations`!
})

const syncCategory = async () => {
  await sequelize.sync()
}

export { Category, syncCategory }
