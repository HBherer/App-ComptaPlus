const path = require('path');


exports.logPage = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'connexion.vue'));
}