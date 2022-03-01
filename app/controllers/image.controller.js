const imageModel=require("../../dataBase/models/image.model")

class image{
    static addImage=async(req,res)=>{
        try{
            // const newName=`${req.file.path}${path.extname(req.file.originalname)}`
            // fs.rename(req.file.path,newName,()=>{})
         //    req.user.image=newName
         //    await req.save()
           res.send(req.file)
        }
        catch(e){
            res.send({
                apiStatus:false,
                 data:e.message,
                  message:"error adding image"
            })
        }

    }

}

module.exports=image