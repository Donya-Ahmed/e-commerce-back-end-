const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
require("dotenv").config()
require("../../dataBase/connection")



app.use(express.json())
app.use(express.urlencoded({extended:true}))
const imageRoutes=require("../../routes/image.routes")
app.use("/api/image",imageRoutes)

const userRoutes=require("../../routes/user.routes")
app.use("/api/user",userRoutes)

const productRoutes=require("../../routes/product.routes")
app.use("/api/product",productRoutes)

const cartRoutes=require("../../routes/cart.routes")
app.use("/api/cart",cartRoutes)

const orderRoutes=require("../../routes/order.routes")
app.use("/api/order",orderRoutes)

module.exports=app