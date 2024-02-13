const express = require('express')
const router = express.Router()
const userRouter = require('./user')
const categoryRouter = require('./category')
const articleRouter = require('./article')
const pubRouter = require('./public')
const authentication = require('../middlewares/authentication')

router.use('/users', userRouter)
router.use('/categories', authentication, categoryRouter)
router.use('/articles', articleRouter)
router.use('/public', pubRouter )

module.exports = router