const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/auth_token', {usreMongoClient: true })
mongoose.Promise = global.Promise

require('./src/index')(app)

app.listen(9000, ()=>{
    console.log('Express has benn started...')
});