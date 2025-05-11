const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        port: process.env.DB_PORT
    }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Task = require('./task')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);

module.exports = db;
