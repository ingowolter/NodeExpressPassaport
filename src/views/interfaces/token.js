const check = require('express-validator/check').check

module.exports = [
    check('username', 'Please check username field')
        .isAlphanumeric()
        .isLength({ min: 3 }),

    check('password', 'Please check password field')
        .isAlphanumeric()
        .isLength({ min: 3 })
]