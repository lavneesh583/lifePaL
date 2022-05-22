const {Pool} = require('pg')
require('dotenv').config()

const pool = new Pool({
    connectionString: process.env.CONNECTION_URI,
    ssl:{
        rejectUnauthorized:false
    }
 })

pool.connect(err => {
    if (err) {
      return console.error('Connection error', err.stack)
    } else {
      console.log('Connected To PostgreSQL')
    }
  })

  module.exports = pool