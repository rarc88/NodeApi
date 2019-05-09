const mysql = require('promise-mysql');

const pool = mysql.createPool({
    host: 'localhost',
    port: '3306',
    database: 'fitel',
    user: 'root',
    password: '',
    connectionLimit: 10
});

pool.getConnection()
    .then(conn => {
        pool.releaseConnection(conn);
        console.log('Connected to the database successfully.');
    }).catch(err => {
        console.log('failure when trying to connect to the database', err);
    });

module.exports = pool;