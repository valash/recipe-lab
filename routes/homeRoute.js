const express = require('express')
const router = express.Router()
const homeRouteController = require('../controllers/homeRoute')

router.get('/', homeRouteController.index)

module.exports = router