const express = require('express')
const app = express()
const morgan = require('morgan')

const products = [
    {
        id: 1,
        name: 'Coki Coki',
        stock: 100,
        price: 500
    },
    {
        id: 2,
        name: 'Oreo',
        stock: 500,
        price: 1500
    }
]

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => res.send(products))
app.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const product = id ? products.filter(value => value.id === id) : products

    res.send(product)
})
app.post('/', (req, res) => {
    const body = req.body
    const newProduct = {
        id: parseInt(body.id),
        name: body.name,
        stock: parseInt(body.stock),
        price: parseInt(body.price)
    }
    products.push(newProduct)

    res.send(products)
})
app.put('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const body = req.body
    const updateProduct = {
        id: parseInt(body.id),
        name: body.name,
        stock: parseInt(body.stock),
        price: parseInt(body.price)
    }
    const findProductIndex = products.findIndex(value => value.id === id)
    products[findProductIndex] = updateProduct

    res.send({
        message: 'Product updated',
        data: products
    })
})
app.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const findProductIndex = products.findIndex(value => value.id === id)
    const product = products.splice(findProductIndex, 1)

    res.send({
        message: 'Product deleted',
        data: product
    })
})

app.listen(8080)