const jwt=require('jsonwebtoken')
const userModel=require("../dataBase/models/user.model")

const authAdmin=async(req,res,next)=>{
try{
const getToken=req.header('Authorization').replace("bearer ","")
const verify=jwt.verify(getToken,process.env.JWT)
const data= await userModel.findOne({_id:verify._id,'tokens.token':getToken})
if(!data) throw new Error ('invalid token')
if(data.typeuser!='admin') throw new Error ('you must be admin')
req.user= data
req.token=getToken
next()
}

catch(e){
    res.status(500).send({apiStatus:false, date:e.message, message:"not authorized"})
}
}
module.exports=authAdmin