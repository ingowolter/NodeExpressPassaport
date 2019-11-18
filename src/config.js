const ExtractJwt = require('passport-jwt').ExtractJwt

module.exports = {
    secretOrKey: 'dfasdad#&*@!^#^@!&*#^@*!DHSAJKDHKSADS45656',
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT')
}