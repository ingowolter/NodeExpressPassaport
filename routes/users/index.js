const express = require('express')
const router = express.Router()
const criteriaCreate = require('./validate/create')
const criteriaRemove = require('./validate/remove')
const validate = require('./validate')

router.post('/', criteriaCreate, validate, require('./create'))
router.delete('/:id', criteriaRemove, validate, require('./remove'))

module.exports = router