const {createProduct,getaProduct,getallProduct,rating,updateProduct,addToWishlist,updatePassword,uploadImages,deleteProduct}=require("../controller/productCtrl");
const {isAdmin,authMiddlewares,e}=require("../middlewares/authMiddleware");
const express = require("express");
const { uploadPhoto, productImgResize } = require("../middlewares/uploadimages");
const router=express.Router();

router.put("/password",authMiddleware,updatePassword);
router.put("/upload/:id",authMiddleware,isAdmin,uploadPhoto.array('images',10),productImgResize,uploadImages);
router.put("/upload/:id",authMiddleware,isAdmin,uploadPhoto);
router.post('/',authMiddlewares,isAdmin,createProduct);
router.get('/:id',getaProduct);
router.put('/wishlist',authMiddlewares,isAdmin,addToWishlist);
router.put('/rating',authMiddlewares,isAdmin,rating);
router.get('/',getallProduct);
router.put('/:id',authMiddlewares,isAdmin,updateProduct);
router.delete("/:id",authMiddlewares,isAdmin,deleteProduct)

module.exports=router;