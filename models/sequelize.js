const { Sequelize } = require('sequelize');

const sequelize = process.env.DATABASE_URL
    ? new Sequelize(process.env.DATABASE_URL, {
          dialect: 'postgres',
          logging: false,
      })
    : new Sequelize('db', 'telegram', 'postgres', '', {
          dialect: 'postgres',
          host: 'db',
          logging: false,
      });

module.exports = sequelize;
