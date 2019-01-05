const frontController = require('./controller/frontController');

module.exports = (app) => {
    app.route('/').get(
        frontController.home
    );

    app.route('/:size').get(
        frontController.parseUrl,
        frontController.findImage,
        frontController.makeImage,
        frontController.saveImage,
        frontController.redirectImage
    );

    app.route('/:size/:color').get(
        frontController.parseUrl,
        frontController.findImage,
        frontController.makeImage,
        frontController.saveImage,
        frontController.redirectImage
    );

    app.route('/:size/:color/:background').get(
        frontController.parseUrl,
        frontController.findImage,
        frontController.makeImage,
        frontController.saveImage,
        frontController.redirectImage
    );

    app.route('/:size/:color/:background/:text').get(
        frontController.parseUrl,
        frontController.findImage,
        frontController.makeImage,
        frontController.saveImage,
        frontController.redirectImage
    );

    app.route('/*').get(
        frontController.notFound
    )
    
}