const express = require('express')
const router = express.Router()
const criteriaCreate = require('./validate/create')
const criteriaRemove = require('./validate/remove')
const criteriaToken = require('./validate/token')
const validate = require('./validate/')

module.exports = (passport) => {
    router.get('/me', passport.authenticate('token', { session: false }), require('./me'))
    router.post('/token', criteriaToken, validate, require('./token'))
    router.post('/', criteriaCreate, validate, require('./create'))
    router.delete('/:id', criteriaRemove, validate, require('./remove'))

    return router
}

// module.exports = router