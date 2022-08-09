const express = require('express')
const Route = express.Router()

const productRoutes = require('./products')

Route
    .use('/products', productRoutes)

module.exports = Route
