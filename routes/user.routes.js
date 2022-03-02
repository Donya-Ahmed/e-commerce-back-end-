const route=require("express").Router()
const userController=require("../app/controllers/user.controller")
const auth = require("../middleware/auth")
const authAdmin=require("../middleware/authAdmin")
const upload=require("../middleware/fileUpload")
route.post("/register",userController.register)
route.post("/login",userController.login)
route.get("/logout",auth,userController.logout)
route.get("/me", auth ,userController.me)

route.get("/profile",auth,upload.single('profile'),userController.profile)
route.post('/registerAdmin',userController.registerAdmin)
route.get("/profileAdmin",authAdmin,upload.single('profile'),userController.profile)
route.post("/profile/edit",auth,userController.profileEdit)
route.get("/showProducts",userController.showProducts)
route.get("/showProduct/:id",userController.showProduct)
route.get("/showProductByCategory/:category",userController.showProductByCategory)
route.get("/sortProducts",userController.sortProducts)





module.exports=route