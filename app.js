const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const path = require('node:path')
require('dotenv').config({
    path: path.resolve(__dirname, './.env')
})
const {
    NODE_ENV,
    FRONTEND_URL,
    PORT
} = process.env

const routesNavigator = require('./routes')

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(cors({
    origin: NODE_ENV === 'development' ? '*' : FRONTEND_URL,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    credentials: NODE_ENV === 'production'
}))
app.use(morgan('dev'))

app.use('/api/v1', routesNavigator)

app.listen(PORT, () => console.log(`Environment & Port & Path ${NODE_ENV} ${PORT} ${path.resolve(__dirname, './.env') }`))
