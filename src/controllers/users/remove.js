const User = require('../../models/user')

module.exports = (req, res) => {
    User
        .findByIdAndRemove(req.params.id)
        .then(() => {
            return res.status(204).end()
            // return res.status(200).json({
            //     status: true
            // })
        })
        .catch((err) => {
            return res.status(500).json({
                status: false,
                err
            })
        })
}