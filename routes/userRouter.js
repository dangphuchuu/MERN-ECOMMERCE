const router = require('express').Router();
const userControllers = require('../controllers/userControllers')
const auth = require('../middleware/auth')

router.post('/register', userControllers.register)

router.post('/login', userControllers.login)

router.get('/logout', userControllers.logout)

router.get('/refresh_token', userControllers.refreshToken)

router.get('/infor', auth, userControllers.getUser)

router.patch('/addcart', auth, userControllers.addCart)

module.exports = router