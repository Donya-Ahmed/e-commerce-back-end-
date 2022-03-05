const mongoose=require("mongoose")
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
const validator=require('validator')
const userSchema=mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
       validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid email")
        }
    },
    birthDate:{
        type:Date,
        required:true
    },
    image:{
        type:String
    },
    password:{
        type:String,
        trim:true,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                trim:true,
                required:true

            }
        }
    ],
    typeuser:{
        type:String,
         enum:['user','admin'],
         default:'user'
        
    }

},{timestamps:true})
userSchema.virtual("mycarts",{
    ref:"cart",
    localField:"_id",
    foreignField:"userId"
})
userSchema.virtual("myorders",{
    ref:"order",
    localField:"_id",
    foreignField:"userId"
})
userSchema.pre('save',async function(){
    if(this.isModified('password')) 
    this.password=await bcryptjs.hash(this.password,parseInt(process.env.SALT))
})
userSchema.statics.login=async(email,password)=>{
  const data=await user.findOne({email})
  if(!data) throw new Error('invalid user name')
  const valid=await bcryptjs.compare(password,data.password)
  if(!valid) throw new Error ('invalid password')
  return data
}
userSchema.methods.generateToken=async function(){
   const token=jwt.sign({_id:this._id},process.env.JWT) //ey00000000
   this.tokens=this.tokens.concat({token})
   await this.save()
   return token
  }



const user=mongoose.model('user',userSchema)
module.exports=user