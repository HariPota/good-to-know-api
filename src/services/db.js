const {Sequelize} = require('sequelize');
const {db} = require('../../config/config');

const sequelize = new Sequelize(db.database, db.user, db.password, {
  host: db.host,
  port: db.port,
  dialect: 'mariadb' /// | 'postgres' | 'sqlite' | 'mysql' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

module.exports = sequelize;