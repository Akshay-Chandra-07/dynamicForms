const express = require('express')
const questionController = require('../controllers/questionController')

const router = express.Router()

router.post('/post',questionController.create)
router.get('/get',questionController.call)

module.exports = router