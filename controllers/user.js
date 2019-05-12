const pool = require('../dataBase')

const user = {
    create: (req, res) => {
        const data = req.body
        pool.query(`INSERT INTO users VALUES (0,?,?,?,?)`, [data.email, data.password, data.sex, data.direction])
            .then(rows => {
                res.send({ status: 'OK', message: 'Successfully saved.' });
            })
            .catch(err => {
                res.send({ status: 'FAIL', message: 'Failure to save.', error: err });
            })
    },
    list: (req, res) => {
        const data = req.body
        pool.query(`SELECT * FROM users`)
            .then(rows => {
                res.send({ status: 'OK', data: rows });
            })
            .catch(err => {
                res.send({ status: 'FAIL', message: 'Failure to save.', error: err });
            })
    }
}

module.exports = user