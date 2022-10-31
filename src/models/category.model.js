const { DataTypes, Model } = require('sequelize');
const sequelize = require('../services/db');

class Category extends Model {}

Category.init({
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Category' // We need to choose the model name
});

const syncCategory = async () => {
  await sequelize.sync();
};

module.exports = {
  Category,
  syncCategory
};