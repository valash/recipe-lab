const express = require('express')
const router = express.Router()

router.use('/', require('./homeRoute'))
router.use('/recipe', require('./recipeRoute'))
router.use('/user', require('./userRoute'))

module.exports = router