// Arquivos de rotas
module.exports = (app, passport) => {
    app.use('/', require('../controllers/auth')(passport))
    app.use('/users', require('../controllers/users')(passport))
}