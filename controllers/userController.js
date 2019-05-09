const user = {
    create: (req, res) => {
        const data = req.body

        res.send({ status: 'OK', message: 'Successfully saved.', data: data });
    }
}

module.exports = user