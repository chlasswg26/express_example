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
            const data = await getAllProductModels(queryDatabase)

            return response(res, 200, data)
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
            const data = await getAllProductModelsById(queryDatabase, queryValues)

            return response(res, 200, data)
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

            const data = await postData
        } catch (error) {
            return response(res, 500, {
                message: error.message || error
            })
        }
    },
    putProductControllers: async (req, res) => {
        try {
            
        } catch (error) {
            return response(res, 500, {
                message: error.message || error
            })
        }
    },
    deleteProductControllers: async (req, res) => {
        try {
            
        } catch (error) {
            return response(res, 500, {
                message: error.message || error
            })
        }
    }
}