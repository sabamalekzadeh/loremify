const path = require('path');

exports.home = (req, res) => {
    res.render(path.join(__dirname,'../static/views/index.ejs'));
}