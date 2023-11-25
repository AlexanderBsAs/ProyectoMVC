const express=require("express")
const router=express.Router()

const mainController=require("../controllers/mainController.js")

router.get("/",mainController.main)
/* router.get("/:id", mainController.id) */

module.exports=router