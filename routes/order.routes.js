const route=require('express').Router()
const orderController=require("../app/controllers/order.controller")
const auth = require("../middleware/auth")
route.post('/createOrder',auth,orderController.createOrder)
route.get('/delAll/:id',auth,orderController.delAll)
route.get('/showUserOrder',auth,orderController.showUserOrder)





module.exports=route