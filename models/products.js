const database = require('../config/database')

module.exports = {
    getAllProductModels: (query, values = []) => {
        return new Promise((resolve, reject) => {
            database.query(query, values, (error, result) => {
                if (error) {
                    const errorMessage = error.message

                    console.log(`Models error: ${errorMessage}`)

                    reject(errorMessage)
                } else {
                    resolve(result.rows)
                }
            })
        })
    },
    getAllProductModelsById: (query, values = []) => {
        return new Promise((resolve, reject) => {
            database.query(query, values, (error, result) => {
                if (error) {
                    const errorMessage = error.message

                    console.log(`Models error: ${errorMessage}`)

                    reject(errorMessage)
                } else {
                    resolve(result.rows[0])
                }
            })
        })
    },
    postProductModels: (query, values = []) => {
        return new Promise((resolve, reject) => {
            database.query(query, values, (error, _) => {
                if (error) {
                    const errorMessage = error.message

                    console.log(`Models error: ${errorMessage}`)

                    reject(errorMessage)
                } else {
                    resolve('New products created!')
                }
            })
        })
    },
    putProductModels: (query, values = []) => {
        return new Promise((resolve, reject) => {
            database.query(query, values, (error, _) => {
                if (error) {
                    const errorMessage = error.message

                    console.log(`Models error: ${errorMessage}`)

                    reject(errorMessage)
                } else {
                    resolve('Products updated!')
                }
            })
        })
    },
    deleteProductModels: (query, values = []) => {
        return new Promise((resolve, reject) => {
            database.query(query, values, (error, _) => {
                if (error) {
                    const errorMessage = error.message

                    console.log(`Models error: ${errorMessage}`)

                    reject(errorMessage)
                } else {
                    resolve('Products deleted!')
                }
            })
        })
    }
}
