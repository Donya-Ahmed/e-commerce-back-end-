const mongoose=require("mongoose")
const productModel=mongoose.Schema({
    // -title{string}
    // -discription {string}
    // -categories-->enum['electroncis','clouthes','supermarket','furniture','books']
    // -subcategory{string}
    // -attributes[{attributeName,values=[{value,quantity}]}]
    // -price{}
    // -img
    // -avaliable:boolen
    title:{
        type:String,
        trim:true,
        required:true
    },
    discription:{
        type:String,
        trim:true,
        required:true
    },
    categories:{
        type:String,
        trim:true,
        required:true,
        enum:['electroncis','clouthes','supermarket','furniture','books']
    },
    subcategory:{
        type:String,
        trim:true,
        required:true
    },
    attributes:[
        {
            attributeName:{
                type:String,
                trim:true,
                required:true
            },
            values:[
                {
                    value:{
                        type:String,
                        trim:true,
                        required:true 
                    },
                    quantity:{
                        type:Number,
                        default:1,
                        required:true 
                    }

                }
            ]
        }
    ],

    price:{
        type:Number,
        required:true 
    },
    image:{
        type:String,
        trim:true
    },

    avaliable:{
        type:Boolean,
        default:true
    }


    




},{timestamps:true})

const product=mongoose.model('product',productModel)
module.exports=product