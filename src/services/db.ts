import { Sequelize } from 'sequelize';
import config from '../config/config';

const {db} = config;

const sequelize = new Sequelize(db.database, db.user, db.password, {
  host: db.host,
  port: db.port,
  dialect: 'mariadb' /// | 'postgres' | 'sqlite' | 'mysql' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

export default sequelize;