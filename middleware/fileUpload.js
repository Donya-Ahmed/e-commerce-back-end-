const multer  = require('multer')
// const upload = multer({ dest: 'frontEnd/public/images' })
const path=require('path')
const fs=require('fs')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const folderName=path.join("frontEnd/public",file.fieldname)
        fs.mkdir(folderName,(err)=>{})
      cb(null,folderName)
    },
    filename: function (req, file, cb) {
       let fileName=""
         if(req.user) {
            fileName=`${file.fieldname}-${Date.now()}-${path.extname(file.originalname)}`
         }
    else{
        fileName=`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    }
      

      cb(null,fileName)
    }
  })
  const upload=multer({
    storage,
    limits:{fieldSize:20000000},
    fileFilter:function(req,file,cb){
       
           const arrExt=['.png','.jpg','.jpeg']
           const nameExt=path.extname(file.originalname)
           if(!arrExt.includes(nameExt)) return cb(new Error('invalid error'),false )
           cb(null,true)

             
        
    }
  })
module.exports=upload