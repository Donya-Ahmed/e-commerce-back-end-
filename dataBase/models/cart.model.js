const mongoose=require("mongoose")
const cartModel=mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user"
    },
    products:[
        {
            productId:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:"product"
            },
            quantity:{
                type:Number,
                required:true
            },
            price:{
                type:Number,
                required:true
            },
            image:{
                type:String,
                required:true

            },
            title:{
                type:String,
                required:true

            }
        }
    ]

},{timestamps:true})
const cart=mongoose.model('cart',cartModel)
module.exports=cart