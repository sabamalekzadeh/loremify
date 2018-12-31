const frontController = require('./controller/frontController');

module.exports = (app) => {
    app.route('/').get(
        frontController.home
    );
}