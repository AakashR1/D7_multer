const express = require('express');
const routes = express.Router();
const ProfileController = require('../controller/ProfileController');
const uploads = require('../middleware/multer');

routes.get('/singleFile',ProfileController.singleFile);
routes.get('/miltipleFile',ProfileController.multiFile);
routes.post('/upload-profile-pic',uploads.single('profile_pic'),ProfileController.postSingleFile);
routes.post('/upload-multiple-images',uploads.array('multiple_images', 10),ProfileController.PostMultiFile);


module.exports = routes;