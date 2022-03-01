const app=require("./app/src/app")
const PORT=process.env.PORT ||3000
// console.log(PORT)
app.listen(PORT,()=>console.log(`server on at port${PORT}`))