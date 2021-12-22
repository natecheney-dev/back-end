const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const server = express()


const guestRouter = require('./guests/guests-router')
const eventRouter = require('./events/events-router')
const usersAuthRouter = require('./users/auth-router')

server.use(express.json())

server.use('/api/auth', usersAuthRouter)
server.use('/api/events', eventRouter)
server.use('/api/guests', guestRouter)

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack
    })
  })
  
  module.exports = server