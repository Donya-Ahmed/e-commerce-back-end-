const route=require("express").Router()
const productController=require("../app/controllers/product.controller")
const authAdmin=require("../middleware/authAdmin")
const upload=require("../middleware/fileUpload")
route.post("/addProduct",authAdmin,productController.addProduct)
route.post("/addProductImg/:id",authAdmin,upload.single('product'),productController.addProductImg)

route.post("/addProductAttribute/:id",authAdmin,productController.addProductAttribute)
route.post("/addProductAttributeValue/:id/:attribute",authAdmin,productController.addProductAttributeValue)
route.post("/editProduct/:id",authAdmin,productController.editProduct)
route.delete("/delProduct/:id",authAdmin,productController.delProduct)
route.get("/delproducts",authAdmin,productController.delproducts)







module.exports=route