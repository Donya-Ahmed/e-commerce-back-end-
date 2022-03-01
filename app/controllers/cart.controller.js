const cartModel=require("../../dataBase/models/cart.model")
const productModel=require("../../dataBase/models/product.model")
class Cart{
    static createCart=async(req,res)=>{
        try{
            let cart = await cartModel.findOne({userId:req.user.id})
            if(!cart) cart= new cartModel({userId:req.user._id})
         const product=await productModel.findById(req.body.productId)
        //    const cart=await cartModel.findById(req.params.id)
        cart.products.push({...req.body,price:product.price})
           await cart.save()
           res.send({
            apiStatus:true,
             data:cart,
              message:"success create cart"
        })
           

        }
        catch(e){
            res.send({
                apiStatus:false,
                 data:e.message,
                  message:"error create cart"
            })
        }

    }
    // static addInCart=async(req,res)=>{
    //     try{
    //        const cart=await cartModel.findById(req.params.id)
    //        const product=await productModel.findById(req.body.productId)
    //        cart.products.push({...req.body,price:product.price})
    //        await cart.save()
    //        res.send({
    //         apiStatus:true,
    //          data:cart,
    //           message:"success adding in cart"
    //     })
          
    //     }
    //     catch(e){
    //         res.send({
    //             apiStatus:false,
    //              data:e.message,
    //               message:"error adding in cart"
    //         })
    //     }

    // }
    static delFromCart=async(req,res)=>{
        try{
            const cart=await cartModel.findById(req.params.id)
            const index=cart.products.findIndex(obj=>obj.productId==req.params.productId)
            cart.products.splice(index,1)
            await cart.save()
            res.send({
             apiStatus:true,
             message:"success delete from cart"
         })
        }
        catch(e){
            res.send({
                apiStatus:false,
                 data:e.message,
                  message:"error delete from cart"
            })
        }

    }
    static editCart=async(req,res)=>{
        try{
            const cart=await cartModel.findById(req.params.id)
            const index=cart.products.findIndex(obj=>obj.productId==req.params.productId)
            cart.products.splice(index,1)
            cart.products.push(req.body)
            await cart.save()
            res.send({
             apiStatus:true,
             message:"success edit cart"
         })
           
        }
        catch(e){
            res.send({
                apiStatus:false,
                 data:e.message,
                  message:"error edit cart"
            })
        }

    }
    static delAll=async(req,res)=>{
        try{
            const cart=await cartModel.findByIdAndDelete(req.params.id)
                    await cart.save()
                    res.send({
                        apiStatus: true,
                        message: "sucess delete cart"
                    })
        }
        catch(e){
            res.send({
                apiStatus:false,
                 data:e.message,
                  message:"error delete cart"
            })
        }

    }
    static showUserCart=async(req,res)=>{
        try{
            await req.user.populate("mycarts")
            res.send({
                apiStatus:true,
                 data:req.user.mycarts,
                  message:"success showing cart"
            })
           
        }
        catch(e){
            res.send({
                apiStatus:false,
                 data:e.message,
                  message:"error showing cart"
            })
        }

    }

}
module.exports=Cart