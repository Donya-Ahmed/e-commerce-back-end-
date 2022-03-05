const orderModel=require("../../dataBase/models/order.model")
const cartModel=require("../../dataBase/models/cart.model")
class Order{
    static createOrder=async(req,res)=>{
        try{
        const product= await cartModel.findOne({userId:req.user._id})
        const order=new orderModel({userId:req.user._id,order:product.products,...req.body})
         await order.calculate()
      
        await order.save()
           res.status(200).send({
            apiStatus:true,
             data:order,
              message:"success create order"
        })
           

        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                 data:e.message,
                  message:"error create order"
            })
        }

    }

    static delAll=async(req,res)=>{
        try{
            const order=await orderModel.findByIdAndDelete(req.params.id)
                    await order.save()
                    res.status(200).send({
                        apiStatus: true,
                        message: "sucess delete order"
                    })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                 data:e.message,
                  message:"error delete order"
            })
        }

    }

    static showUserOrder=async(req,res)=>{
        try{
            await req.user.populate("myorders")
            res.status(200).send({
                apiStatus:true,
                 data:req.user.myorders,
                  message:"success showing order"
            })
           
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                 data:e.message,
                  message:"error showing order"
            })
        }

    }
  

}
module.exports=Order