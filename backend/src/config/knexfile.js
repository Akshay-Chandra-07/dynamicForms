const dotenv = require('dotenv')

dotenv.config({path:'../../.env'})

const config = {
    client : 'mysql2',
    connection:{
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DATABASE
    },
    migrations : {
        directory : '../../migrations'
    }
}

module.exports = config