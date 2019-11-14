const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const passport = require('passport')
const app = express()

require('./src/controllers/users/auth')(passport)
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(passport.initialize())

// Carrega o arquivo principal
require('./src/routes/web')(app, passport)

// Conecta a base de dados
mongoose.connect('mongodb://localhost:27017/auth_token', { 
    useUnifiedTopology: true,
    useNewUrlParser: true
})
mongoose.Promise = global.Promise

app.listen(9000, () => {
    console.log('Express has been started')
})