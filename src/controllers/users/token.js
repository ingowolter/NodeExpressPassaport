const User = require('../../models/user')
const jwt = require('jwt-simple')
const JwtConfigs = require('./../../config')

module.exports = (req, res) => {
    let { username } = req.body
    
    User
        .findOne({ username })
        .then((user) => { 
            if (!user) {
                return res.status(404).json({
                    status: false,
                    token: ''
                })
            }
            user.validatePassword(user.password, (err, result) => {

                let token = jwt.encode({ id: user._id }, JwtConfigs.secretOrKey)

                return res.status(200).json({
                    status: true,
                    token
                })
            })
        })
        .catch((error) => {
            return res.status(500).json({
                status: false,
                error
            })
        })
}