const connection = require('../DB/db');
const CreateTable = require('../createTables/createTables');
CreateTable.createTable()
CreateTable.addColumn()
const path = require('path');
const upload = require('../middleware/multer');


const singleFile = (req, res) => {
    res.sendFile(path.join(__dirname,'../public/singleFile.html'))
}

const postSingleFile = (req, res) => {

        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (!req.file) {
            return res.send('Please select an image to upload');
        }
        
        // res.send(`You have uploaded this image: <hr/><img src="uploads/${req.file.filename}" width="500"><hr /><a href="/singleFile">Upload another image</a>`);
        res.send(`You have uploaded this image: <hr/><img src="${req.file.filename}" width="500"><hr /><a href="/singleFile">Upload another image</a>`);
}

const multiFile = (req, res) => {
    res.sendFile(path.join(__dirname,'../public/multipleFile.html'))
}

const PostMultiFile = (req, res) => {
        
        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (!req.files) {
            return res.send('Please select an image to upload');
        }
    
        let result = "You have uploaded these images: <hr />";
        const files = req.files;
        let index, len;

        // Loop through all the uploaded images and display them on frontend
        for (index = 0, len = files.length; index < len; ++index) {
            result += `<img src="uploads/${files[index].filename}" width="300" style="margin-right: 20px;">`;
        }
        result += '<hr/><a href="./">Upload more images</a>';
        res.send(result);
    
}

module.exports = {
    singleFile,
    multiFile,
    postSingleFile,
    PostMultiFile
}