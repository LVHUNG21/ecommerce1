const express=require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {getColor,getallColor,createColor,updateColor,deleteColor}=require("../controller/colorCtrl");
const router=express.Router();
router.post('/',authMiddleware,isAdmin,createColor)
router.put('/:id',authMiddleware,isAdmin,updateColor);
router.delete('/:',authMiddleware,isAdmin,deleteColor);
router.get('/:id',getColor);
router.get('/',getallColor);
module.exports=router;
