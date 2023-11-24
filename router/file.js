const express = require('express')
const routing = express.Router()
const data= require('../controllers/FileHandle')
const multer  = require('multer')
const dest = multer({ dest: 'uploads/'})


// Set up multer storage and file filtering
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'uploadsFile/'); // Destination folder for uploaded files
//     },
//     filename: (req, file, cb) => {
//       const ext = path.extname(file.originalname);
//       cb(null, `${Date.now()}${ext}`); // Unique file name with timestamp
//     },
//   });
  
//   const upload = multer({
//     storage: storage,
   
//     fileFilter: (req, file, cb) => {
//       if (file.mimetype.startsWith('image/')) {
//         cb(null, true); // Allow images only
//       } else {
//         cb(new Error('Invalid file type. Only images are allowed.'));
//       }
//     },
//   });
  
  



routing
 .get('/',data.getData)
 .get('/:id',data.getDataById)
 .post('/',dest.single('photo'),data.addData)
 .patch('/:id',data.updateData)
 .delete('/:id',data.deleteData);
 
 exports.routing = routing;


// const express = require('express');
// const routing = express.Router();
// const data = require('../controllers/FileHandle');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

// // Create the uploadsFile folder if it doesn't exist
// const uploadFolder = 'uploadsFile/';
// if (!fs.existsSync(uploadFolder)) {
//   fs.mkdirSync(uploadFolder);
// }

// // Set up multer storage and file filtering
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploadsFile/'); // Destination folder for uploaded files
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     cb(null, `${Date.now()}${ext}`); // Unique file name with timestamp
//   },
// });

// const upload = multer({
//   storage: storage,

//   fileFilter: (req, file, cb) => {
//     if (file.mimetype.startsWith('image/')) {
//       cb(null, true); // Allow images only
//     } else {
//       cb(new Error('Invalid file type. Only images are allowed.'));
//     }
//   },
// });

// routing
//   .get('/', data.getData)
//   .get('/:id', data.getDataById)
//   .post('/post', upload.single('photo'), data.addData)
//   .patch('/:id', data.updateData)
//   .delete('/:id', data.deleteData);

// exports.routing = routing;
