const express = require('express')
const logeer = require('morgan')
const app = express()
const cors = require('cors')

app.use(logeer('dev'))
app.use(express.json())
app.use(cors())
const {connect} = require('./db/db')

const indexRouter = require('./routers/index')
const apiRouter = require('./routers/api')

app.use('/', indexRouter)
app.use('/v1', apiRouter )

connect()

module.exports = app 
