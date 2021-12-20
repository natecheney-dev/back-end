const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const server = express()


const guestRouter = require('./guests/guests-router')



server.use('/api/guests', guestRouter)

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack
    })
  })
  
  module.exports = server