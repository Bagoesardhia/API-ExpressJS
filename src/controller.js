const pool = require('../db')
const queries = require('./queries')

const getAdmin = (req, res) => {
    pool.query(queries.getAdmin, (error, results) => {
        if (error) throw error
        else
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getAdmin
}