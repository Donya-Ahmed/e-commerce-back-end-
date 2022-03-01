const route=require('express').Router()
const cartController=require("../app/controllers/cart.controller")
const auth = require("../middleware/auth")
route.post('/createCart',auth,cartController.createCart)
// route.post('/addInCart/:id',auth,cartController.addInCart)
route.get('/delFromCart/:id/:productId',auth,cartController.delFromCart)
route.post('/editCart/:id/:productId',auth,cartController.editCart)
route.get('/delAll/:id',auth,cartController.delAll)
route.get('/showUserCart',auth,cartController.showUserCart)





module.exports=route