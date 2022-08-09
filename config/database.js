const { Pool } = require('pg')
const path = require('node:path')
require('dotenv').config({
    path: path.resolve(__dirname, '../.env')
})
const {
    PGHOST,
    PGUSER,
    PGDATABASE,
    PGPASSWORD,
    PGPORT,
    NODE_ENV
} = process.env

const pool = new Pool({
    user: PGHOST,
    host: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
    port: PGPORT,
    connectionTimeoutMillis: 50000,
    idleTimeoutMillis: 60000,
    allowExitOnIdle: true
})

if (NODE_ENV === 'development') {
    pool.on('connect', () => console.log('Postgres is now online...'))
    
    pool.on('error', error => console.log(error.message))

    console.log(`${pool.idleCount} clients currently idle...
${pool.waitingCount} clients queued requests waiting...`)
}

module.exports = pool
