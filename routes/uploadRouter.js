const router = require('express').Router()
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')
const uploadImageControllers = require('../controllers/uploadImageControllers')

//! Upload image
router.post('/upload', auth, authAdmin, uploadImageControllers.postUpload)

//! Delete image
router.post('/destroy', auth, authAdmin, uploadImageControllers.deleteUpload)

module.exports = router