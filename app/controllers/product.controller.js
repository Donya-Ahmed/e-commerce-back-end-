const productModel = require('../../dataBase/models/product.model')
class product {
    static addProduct = async (req, res) => {
        try {
             const product=new productModel(req.body)
            // const product=new productModel({...req.body,image:req.file.path})

              // product.image=req.file.path
            await product.save()
           
            res.status(200).send({
                apiStatus: true,
                data:product,
                message: "success adding product"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: "error adding product"
            })
        }
    }
    static addProductImg = async (req, res) => {
        try {
  
            const product= await productModel.findById(req.params.id)

               product.image=req.file.path
            await product.save()
           
            res.status(200).send({
                apiStatus: true,
                data:product,
                message: "success adding image"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: "error adding image"
            })
        }
    }

    static addProductAttribute = async (req, res) => {
        try {
            // const product=await productModel.findByIdAndUpdate({_id:req.params.id},{$push:{attributes:req.body}})
            const product=await productModel.findById(req.params.id)
            product.attributes.push(req.body)
            await product.save()
            res.status(200).send({
                apiStatus: true,
                data: product,
                message: "sucess adding attribute"
            })

        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: "error adding attribute"
            })
        }
    }
    static addProductAttributeValue = async (req, res) => {
        try {
            // const product=await productModel.findByIdAndUpdate({_id:req.params.id},{$push:{attributes:req.body}})
            const product=await productModel.findById(req.params.id)
            const index=product.attributes.findIndex(obj=>obj.attributeName==req.params.attribute)
            product.attributes[index].values.push(req.body)
            await product.save()
            res.status(200).send({
                apiStatus: true,
                data: product,
                message: "sucess adding value"
            })

        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: "error adding value"
            })
        }
    }
   
    static editProduct = async (req, res) => {
        try {
             const product=await productModel.findByIdAndUpdate(req.params.id,req.body)
            
             await product.save()
             res.status(200).send({
                 apiStatus: true,
                 message: "sucess editing value"
             })
 

        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: "error adding product"
            })
        }
    }
    static delProduct = async (req, res) => {
        try {
            const product=await productModel.findByIdAndDelete(req.params.id)
    //    const product=await productModel.deleteOne({_id:req.params.id})
            await product.save()
            res.status(200).send({
                apiStatus: true,
                message: "sucess delete product"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: "error delete product"
            })
        }
    }
    static delproducts = async (req, res) => {
        try {
            const product=await productModel.deleteMany()
            await product.save()
            res.status(200).send({
                apiStatus: true,
                message: "sucess delete products"
            })

        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: "error delete products"
            })
        }
    }
}
module.exports = product