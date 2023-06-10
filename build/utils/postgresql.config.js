"use strict";
const { Sequelize } = require('sequelize');
module.exports = new Sequelize(process.env.POSTGRESQL_CONNECTION, {
    dialect: 'postgres',
    logging: console.log
});
