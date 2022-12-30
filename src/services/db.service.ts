import { Sequelize } from 'sequelize'
import config from '@/config/config'

const { db: dbService } = config

const sequelize = new Sequelize(dbService.database, dbService.user, dbService.password, {
  host: dbService.host,
  port: dbService.port,
  dialect: 'mariadb', /// | 'postgres' | 'sqlite' | 'mysql' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
})

export default sequelize
