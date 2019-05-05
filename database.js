const Sequelize = require('sequelize')

const host = process.env.HOST || 'localhost'
const port = process.env.HOST || '3306'
const dialect = process.env.DIALECT || 'mysql' //'mysql'|'sqlite'|'postgres'|'mssql'
const database = process.env.DATABASE || 'angular_api'
const user = process.env.USER || 'root'
const password = process.env.PASSWORD || ''

const sequelize = new Sequelize(database, user, password, {
  host: host,
  port: port,
  dialect: dialect
})

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log(`Error al conectar: ${err}`)
  })

module.exports = [ Sequelize, sequelize ]