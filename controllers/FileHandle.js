
const dataM = require('../model/FileModel')
const dataModel = dataM.fileModel;

exports.addData = async(req, res)=>{
 console.log(res.json)

//   try{
//     const data =req.body
//     await dataModel.create( data )

// console.log("data added successfully")
// res.status(201).json(
//   {
//     success:true,
//     message:'data added successfully....'
//   })
//   }
//   catch(err){
//     console.log(err)
//     res.status(400).json(
//       {
//         success:false,
//         message:err
//       })
      
//   }
   



}

exports.getData=async (req,res)=>{
    console.log('file get data ')
    try{

        let data =await dataModel.find({})
        res.json(data)
    }
 catch(err)
 {
    console.log('error find ', err);
 }

}
// get indivisual user data by using id .
exports.getDataById= async(req,res)=>{
 
 
}

//update data
exports.updateData = async(req,res)=>{
 
}


exports.replaceData = async(req,res)=>{
  
}

//delete data 
exports.deleteData=async(req,res)=>{
  console.log(req.params.id)
  

}