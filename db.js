
import {Sequelize} from 'sequelize';
import dotenv from 'dotenv/config.js'

const databaseName = process.env.DB_NAME;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.DB_HOST;

const sequelize = new Sequelize(databaseName, username, password, {
    host: host,
    dialect: 'mysql'
  });

  export default sequelize