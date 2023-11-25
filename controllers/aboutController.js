const express=require("express")
const app=express()
const path=require("path")

let controlador={
    about: (req,res)=>{
        res.sendFile(path.join(__dirname,"/../views/about.html"))
    }
}


module.exports=controlador