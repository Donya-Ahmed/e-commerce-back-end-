const route=require("express").Router()
const imageController=require("../app/controllers/image.controller")
const upload=require("../middleware/fileUpload")

route.post('/addImage', upload.single('profile'),imageController.addImage)
module.exports=route