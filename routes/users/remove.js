const User = require('./../../scheme/user')
module.exports = (req, res)=>{
    User
        .findByIdAndRemove(req.params.id)
        .then(()=>{
            return res.status(204).end()
            // return res.status(204).json({
            //     status: true
            // })
        })
        .catch((err)=>{
            return res.status(500).json({
                status: false,
                err
            })
        })
}