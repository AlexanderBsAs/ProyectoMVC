const express=require("express")
const app=express()
const path=require("path")

let controlador={
    main: (req,res)=>{
        res.sendFile(path.join(__dirname,"/../views/home.html"))
    },
    id: (req,res)=>{
        res.send("este es tu numero: "+req.params.id)
    }

}

module.exports=controlador