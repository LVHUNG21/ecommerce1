const express=require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {getBrand,getallBrand,createBrand,updateBrand,deleteBrand}=require("../controller/brandCtrl");
const router=express.Router();
authMiddleware
createCate
router.post('/',authMiddleware,isAdmin,createBrand)
router.put('/:id',authMiddleware,isAdmin,updateBrand);
router.delete('/:',authMiddleware,isAdmin,deleteBrand);
router.get('/:id',getBrand);
router.get('/',getallBrand);
module.exports=router;
