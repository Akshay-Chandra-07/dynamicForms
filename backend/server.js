const express = require('express')
const cors = require('cors')
require('./src/config/db')
const questionRoute = require('./src/routes/questionRoute')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/questions',questionRoute)


const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
})