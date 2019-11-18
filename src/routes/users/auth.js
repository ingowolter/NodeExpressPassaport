const JwtStrategy = require('passport-jwt').Strategy
const User = require('./../../schema/user')
const JwtConfigs = require('./../../config')

module.exports = (passport) => {
    passport.use('token', new JwtStrategy(JwtConfigs, (payload, cb) => {
        User
            .findById(payload.id)
            .select({ name: 1, username: 1 })
            .then((user) => {
                if (!user) {
                    return cb(null, false)
                }

                return cb(null, user)
            })
            .catch((error) => {
                return cb(error, false)
            })
    }))
}