const check = require('express-validator/check').check

module.exports = [
    check('id', 'Please check id field')
        .isMongoId()
]