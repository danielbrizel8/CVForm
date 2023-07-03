const express = require('express')
const { fetchRegister, publishRegister, loginFunction, returnData, returnUser} = require('../controllers/registerControllers')
const router = express.Router()

router.post('/', publishRegister)
router.post('/login', loginFunction)
router.post('/getdata', returnData)
router.get('/fetch', fetchRegister)
router.post('/fetchuser', returnUser)


module.exports = router
