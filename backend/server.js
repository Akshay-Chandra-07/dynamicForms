const express = require('express')
const cors = require('cors')
require('./src/config/db')
const questionRoute = require('./src/routes/questionRoute')
const app = express()

app.use(cors()) // create cors error?
app.use(express.json()) // `express.json()` use case?
// why do we need lock.json file?
// middlewares in api level?
// create global error handler? 
// insert nested data in db?
// input: {id: 1, name: "question1", options: [{option: "option1"}, {option: "option2"}]}
app.use('/api/questions',questionRoute)


const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
})