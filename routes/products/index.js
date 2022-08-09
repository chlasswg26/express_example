const express = require('express')
const Route = express.Router()

const {
    getAllProductControllers,
    getAllProductControllersById,
    postProductControllers,
    putProductControllers,
    deleteProductControllers
} = require('../../controllers/products')

Route
    .get('/', getAllProductControllers)
    .get('/:id', getAllProductControllersById)
    .post('/', postProductControllers)
    .put('/:id', putProductControllers)
    .delete('/:id', deleteProductControllers)

module.exports = Route
