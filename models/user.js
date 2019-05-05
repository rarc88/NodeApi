const { Sequelize, sequelize } = require('../database');

const User = sequelize.define('users', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    sex: Sequelize.INTEGER,
    direction: Sequelize.TEXT
})

module.exports = User