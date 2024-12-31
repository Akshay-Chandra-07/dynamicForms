const dotenv = require('dotenv')

dotenv.config()

const config = {
    client : 'mysql2',
    connection:{
        host : '127.0.0.1',
        user : 'root',
        password : 'akrivia',
        database : 'quizdb'
    },
    migrations : {
        directory : '../../migrations'
    }
}

module.exports = config