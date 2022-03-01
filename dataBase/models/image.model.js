const mongoose=require("mongoose")
const imageModel=mongoose.Schema({
  imagePath:{
      type:String,
      required:true
  }
},{timestamps:true})

const image=mongoose.model('image',imageModel)
module.exports=image