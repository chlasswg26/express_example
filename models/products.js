const database = require('../config/database')

module.exports = {
    getAllProductControllers: (query) => {
        return new Promise((resolve, reject) => {
            database.query(query, (error, result) => {
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
    getAllProductControllersById: (query) => {
        return new Promise((resolve, reject) => {
            database.query(query, (error, result) => {
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
    postProductControllers: (query) => {
        return new Promise((resolve, reject) => {
            database.query(query, (error, result) => {
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
    putProductControllers: (query) => {
        return new Promise((resolve, reject) => {
            database.query(query, (error, result) => {
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
    deleteProductControllers: (query) => {
        return new Promise((resolve, reject) => {
            database.query(query, (error, result) => {
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