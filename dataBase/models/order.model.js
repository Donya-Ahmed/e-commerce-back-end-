const mongoose=require('mongoose')
const orderModel=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user"
    },
    order:[
       {

       }
    ],
    address:{
        type:String,
        required:true

    },
    totalPrice:{
        type:Number,
       
    }
},{timestamps:true})

orderModel.methods.calculate=function(){
    let sum=0
    this.order.forEach(obj => {
        sum+=obj.quantity*obj.price 
    });
    this.totalPrice=sum
}

const order=mongoose.model('order',orderModel)
module.exports=order