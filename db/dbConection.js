
const mongose = require('mongoose');

//dotenv given ability to access env file . 
require('dotenv').config();


//params
const params = {
  useNewUrlParser:true,
  // useCreateIndex:true,
  useUnifiedTopology:true,
  // useFindAndModify:false
}

exports.main= async()=>{
  await mongose.connect(process.env.DATABASE_URL, params)
 .then(()=>{
    console.log('database connacted')
 }).catch((err)=>{
    console.log("error is find :", err)
 })
}


// mongoose data base connected 



