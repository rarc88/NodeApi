const mysql = require('promise-mysql');

const pool = mysql.createPool({
    host: 'localhost',
    port: '3306',
    database: 'angular_api',
    user: 'root',
    password: ''
});

pool.getConnection()
    .then(conn => {
        pool.releaseConnection(conn);
        console.log('Connected to the database successfully.');
    }).catch(err => {
        console.log('Failure when trying to connect to the database.', err);
    });

module.exports = pool;