const multer = require('multer');
const multerHelper = require('../helper/multer.helper');
const path = require('path')
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        // cb(null, path.join(__dirname,'../public/uploads'));
        cb(null, path.join(__dirname,'../uploads'));
    },

    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({ storage: storage, fileFilter: multerHelper.imageFilter });

module.exports = upload