
const mongose = require('mongoose');
//const Model = require('../models/dataModel')
//const dataModel= Model.datamodel;
const {Schema}=mongose;

let  schema = new Schema({
    name:{
      type:String,
      max:50,
      required:true
    },
    sub:{
      type:String,
      max:100,
      default: 'message topic'

    },
    msg:{
      type:String,
      max:500,
      default: 'this is message section'
    },
    date:{type:Date , default: Date.now},
    image:{
      type:String ,
      default: ''
    }

},{timestamps:true}) 

// 'new' is a collection name , that use mongoss atles as a collection .
exports.dataModel= mongose.model('new',schema);