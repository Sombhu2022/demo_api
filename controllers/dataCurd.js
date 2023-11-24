
const dataM = require('../model/dataModel')
const dataModel = dataM.dataModel;

exports.addData = async(req, res)=>{

  try{
    const data =req.body
      //   {
    //   name:data.name,
    //   sub:data.sub,
    //   msg:data.msg
    // } only put data , becouse that is a json data .. 
    await dataModel.create( data )

console.log("data added successfully")
res.status(201).json(
  {
    success:true,
    message:'data added successfully....'
  })
  }
  catch(err){
    console.log(err)
    res.status(400).json(
      {
        success:false,
        message:err
      })
      
  }
   



}

exports.getData=async (req,res)=>{
  let data = await dataModel.find({}).exec();
//  console.log(data)
  res.json(data)

}
// get indivisual user data by using id .
exports.getDataById= async(req,res)=>{
  try{
   const {id } = req.params
    let data = await dataModel.findById({_id:id})
    res.json(data)
  
  }
  catch(err){
  res.status(400).json({
      success: true,
      message: err
    })
  }
}

//update data
exports.updateData = async(req,res)=>{
  try{
      const {id}=req.params
    let data=await dataModel.findByIdAndUpdate({_id:id},  req.body, { new:true})
   // console.log(data)
  res.json(data )
  console.log(id , req.body)
  }
  catch(err){
    console.log('error',err)
    res.status(400).json({
      success:false,
      message:err
    })
  }
}


exports.replaceData = async(req,res)=>{
  let data=await dataModel.findOneAndReplace({name:'sombhu das',sub:'mca'},{$set :{name:'som',sub:'mba'}} , {})
  console.log(data)
}

//delete data 
exports.deleteData=async(req,res)=>{
  console.log(req.params.id)
    try{
    
     await dataModel.findByIdAndDelete(req.params.id)
    res.status(200).json({
      success:true,
      message:'data deleted successfully'
    })
    }
    catch(err){
      res.status(200).json({
        success:true,
        message:'data not deleted' 
      })
    }

}