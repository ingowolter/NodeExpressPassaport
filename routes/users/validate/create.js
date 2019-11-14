const check = require('express-validator/check').check

module.exports = [

    check('name', 'Please check name field')
    .isAlphanumeric().withMessage('')
    .isLength({min:3}),

    check('username', 'please check username field')
        .isAlphanumeric().withMessage('')
        .isLength({min:3}),

    check('password', 'please check password field')
        .isAlphanumeric().withMessage('')
        .isLength({min:3})
]