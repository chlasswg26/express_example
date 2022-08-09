const express = require('express')
const morgan = require('morgan')
const app = express()
require('dotenv').config()
const {
    NODE_ENV,
    FRONTEND_URL,
    PORT,
    HOST
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

app.listen(PORT, HOST, () => {
    if (NODE_ENV === 'development') console.log(`Listen port at ${PORT}`)
})
