const express = require("express");
const {createProduct,getaProduct,deleteImages,uploadImages,}=require("../controller/uploadCtrl");
const {isAdmin,authMiddleware}=require("../middlewares/authMiddleware");
const { uploadPhoto, productImgResize } = require("../middlewares/uploadimages");
const router=express.Router();


router.post("/",authMiddleware,isAdmin,uploadPhoto.array('images',10),productImgResize,uploadImages);
// router.put("/upload/:id",authMiddleware,isAdmin,uploadPhoto);

router.delete("/delete-img/:id",authMiddleware,isAdmin,deleteImages)

module.exports=router;