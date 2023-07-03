const express = require('express')
const { publishCVForm} = require('../controllers/CVFormControllers')
const {editCVForm} = require('../controllers/CVFormControllers')
const router = express.Router()

router.post('/create', publishCVForm)
router.patch('/replace', editCVForm)


module.exports = router