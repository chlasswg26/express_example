const {
    getAllProductModels,
    getAllProductModelsById,
    postProductModels,
    putProductModels,
    deleteProductModels
} = require('../models/products')
const { response } = require('../helpers')

module.exports = {
    getAllProductControllers: async (_, res) => {
        try {
            const queryDatabase = 'SELECT * FROM products'
            const result = await getAllProductModels(queryDatabase)

            return response(res, 200, result)
        } catch (error) {
            return response(res, 500, {
                message: error.message || error
            })
        }
    },
    getAllProductControllersById: async (req, res) => {
        try {
            const params = req.params
            const paramsLength = Object.keys(params).length

            if (!paramsLength) throw new Error('Request parameters empty!')

            const id = request.params.id
            const queryDatabase = 'SELECT * FROM products WHERE id = $1'
            const queryValues = [id]
            const result = await getAllProductModelsById(queryDatabase, queryValues)

            return response(res, 200, result)
        } catch (error) {
            return response(res, 500, {
                message: error.message || error
            })
        }
    },
    postProductControllers: async (req, res) => {
        try {
            const body = req.body
            const bodyLength = Object.keys(body).length

            if (!bodyLength) throw new Error('Request body empty!')

            const newProduct = {
                name: body.name,
                stock: body.stock,
                price: body.price
            }

            const queryDatabase = 'INSERT INTO products(name, stock, price) VALUES($1, $2, $3)'
            const queryValues = [newProduct.name, newProduct.stock, newProduct.price]
            const result = await postProductModels(queryDatabase, queryValues)

            return response(res, 200, result)
        } catch (error) {
            return response(res, 500, {
                message: error.message || error
            })
        }
    },
    putProductControllers: async (req, res) => {
        try {
            const params = req.params
            const paramsLength = Object.keys(params).length

            if (!paramsLength) throw new Error('Request parameters empty!')

            const updateProduct = {
                name: body.name,
                stock: body.stock,
                price: body.price
            }

            const id = request.params.id
            const queryDatabase = 'UPDATE products(name, stock, price) SET name = $1, stock = $2, price = $3 WHERE id = $4'
            const queryValues = [
                updateProduct.name,
                updateProduct.stock,
                updateProduct.price,
                id
            ]
            const result = await putProductModels(queryDatabase, queryValues)

            return response(res, 200, result)
        } catch (error) {
            return response(res, 500, {
                message: error.message || error
            })
        }
    },
    deleteProductControllers: async (req, res) => {
        try {
            const params = req.params
            const paramsLength = Object.keys(params).length

            if (!paramsLength) throw new Error('Request parameters empty!')

            const id = request.params.id
            const queryDatabase = 'DELETE FROM products WHERE id = $1'
            const queryValues = [id]
            const result = await deleteProductModels(queryDatabase, queryValues)

            return response(res, 200, result)
        } catch (error) {
            return response(res, 500, {
                message: error.message || error
            })
        }
    }
}
