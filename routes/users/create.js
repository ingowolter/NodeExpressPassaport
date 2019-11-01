const User = require('../../scheme/user')

module.exports = (req, res) =>{
    let user = new User(req.body)

    user 
        .save()
        .then((user)=> {
            return res.json({
                status: true,
                user
            })
        })
        .catch((err)=>{
            return res.json({
                status: false,
                err
            })
        })

}