const express = require('express')
const routing = express.Router()
const data= require('../controllers/dataCurd')

routing
 .get('/',data.getData)
 .get('/:id',data.getDataById)
 .post('/',data.addData)
 .patch('/:id',data.updateData)
 .delete('/:id',data.deleteData);
 
 exports.routing = routing;
