const express=require("express")
const app=express()
let port=3000

let mainRouter=require("./routers/main.js")
let aboutRouter=require("./routers/about.js")
app.listen(port, ()=>{
    console.log("servidor levantado en "+port)
})

app.use("/",mainRouter)

app.use("/about",aboutRouter)
app.use(express.static("public"))
