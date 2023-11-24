
const mongose = require('mongoose');
//const Model = require('../models/dataModel')
//const dataModel= Model.datamodel;
const {Schema}=mongose;

let  schema = new Schema({
    file:{
      type:String,
      max:500,
      required:true
    },
 

},{timestamps:true}) 

// 'new' is a collection name , that use mongoss atles as a collection .
exports.fileModel= mongose.model('fileStore',schema);