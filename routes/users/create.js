const User = require('../../scheme/user')

module.exports = (req, res) =>{
    let user = new User(req.body)

    user.hashPassword(User.password, (err, encPassword)=>{
        user.password = encPassword
        user 
        .save()
        .then((user)=> {
            return res.status(201).json({
                status: true,
                user
            })
        })
        .catch((err)=>{
            return res.status(500).json({
                status: false,
                err
            })
        })
    })
}