const userModel=require("../../dataBase/models/user.model")
const productModel=require("../../dataBase/models/product.model")

class user{
    static register=async(req,res)=>{
        try{
          const user=new userModel(req.body)
          await user.save()
          res.send({
            apiStatus:true,
             data:user,
              message:"success adding user"
        })
        }
        catch(e){
            res.send({
                apiStatus:false,
                 data:e.message,
                  message:"error adding user"
            })
        }

    }

    static login=async(req,res)=>{
        try{
          const user=await userModel.login(req.body.username,req.body.password)
         const token= await user.generateToken()
        // res.send(user)
          res.send({
            apiStatus:true,
             data:{user, token},
              message:"login "
        })
        }
        catch(e){
            res.send({
                apiStatus:false,
                 data:e.message,
                  message:"error login"
            })
        }

    }

    static logout=async(req,res)=>{
        try{
         req.user.tokens=req.user.tokens.filter(token=>token.token!=req.token)
         await req.user.save()
          res.send({
            apiStatus:true,
             data:req.user,
              message:"logout"
        })
        }
        catch(e){
            res.send({
                apiStatus:false,
                 data:e.message,
                  message:"error logout"
            })
        }

    }

    static profile=async(req,res)=>{
        try{
        req.user.image=req.file.path
        await req.user.save()
          res.send({
            apiStatus:true,
             data:req.user,
              message:"success upload image"
        })
        }
        catch(e){
            res.send({
                apiStatus:false,
                 data:e.message,
                  message:"error in upload image"
            })
        }

    }

    static registerAdmin=async(req,res)=>{
        try{
          const user=new userModel({...req.body,typeuser:'admin'})
          await user.save()
          res.send({
            apiStatus:true,
             data:user,
              message:"success adding admin"
        })
        }
        catch(e){
            res.send({
                apiStatus:false,
                 data:e.message,
                  message:"error adding admin"
            })
        }

    }

    static profileEdit=async(req,res)=>{
        try{
        await req.user.updateOne(req.body)
        await req.user.save()
          res.send({
            apiStatus:true,
             data:req.user,
              message:"success upload image"
        })
        }
        catch(e){
            res.send({
                apiStatus:false,
                 data:e.message,
                  message:"error in upload image"
            })
        }

    }

    static showProducts = async (req, res) => {
        try {
            const products=await productModel.find()
            res.send({
                apiStatus: true,
                data:products,
                message: "sucess show products"
            })
        }
        catch (e) {
            res.send({
                apiStatus: false,
                data: e.message,
                message: "error show products"
            })
        }
    }
    static showProduct = async (req, res) => {
        try {
            const product=await productModel.findById(req.params.id)
            res.send({
                apiStatus: true,
                data:product,
                message: "sucess show product"
            })
        }
        catch (e) {
            res.send({
                apiStatus: false,
                data: e.message,
                message: "error show product"
            })
        }
     
    }

    static showProductByCategory = async (req, res) => {
        try {
            const products=await productModel.find({categories:req.params.category})
            res.send({
                apiStatus: true,
                data:products,
                message: "sucess show product"
            })
        }
        catch (e) {
            res.send({
                apiStatus: false,
                data: e.message,
                message: "error show product"
            })
        }
     
    }

    static sortProducts= async (req, res) => {
        try {
            const products=await productModel.find().sort({createdAt:-1}).limit(4)
            res.send({
                apiStatus: true,
                data:products,
                message: "sucess show product"
            })
        }
        catch (e) {
            res.send({
                apiStatus: false,
                data: e.message,
                message: "error show product"
            })
        }
     
    }


}

module.exports=user