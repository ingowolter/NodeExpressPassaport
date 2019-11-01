module.exports = (app) => {
    app.use('/', require('../routes/main/main') )
    app.use('/users', require('../routes/users'))
}