const sequelize = require('../src/services/db');
const { syncCategory } = require('../src/models/category.model');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

(async () => {
  await syncCategory();
})();


