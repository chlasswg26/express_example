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
                    resolve(result)
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
                    resolve(result)
                }
            })
        })
    },
    postProductModels: (query, values = []) => {
        return new Promise((resolve, reject) => {
            database.query(query, values, (error, result) => {
                if (error) {
                    const errorMessage = error.message

                    console.log(`Models error: ${errorMessage}`)

                    reject(errorMessage)
                } else {
                    resolve(result)
                }
            })
        })
    },
    putProductModels: (query, values = []) => {
        return new Promise((resolve, reject) => {
            database.query(query, values, (error, result) => {
                if (error) {
                    const errorMessage = error.message

                    console.log(`Models error: ${errorMessage}`)

                    reject(errorMessage)
                } else {
                    resolve(result)
                }
            })
        })
    },
    deleteProductModels: (query, values = []) => {
        return new Promise((resolve, reject) => {
            database.query(query, values, (error, result) => {
                if (error) {
                    const errorMessage = error.message

                    console.log(`Models error: ${errorMessage}`)

                    reject(errorMessage)
                } else {
                    resolve(result)
                }
            })
        })
    }
}