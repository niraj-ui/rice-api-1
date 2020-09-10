const user = require('./user_routes');

module.exports = function(app){
    app.use('/api/user', user)
}
