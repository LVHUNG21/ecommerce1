const express=require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {getCategory,getallCategory,createCategory,updateCategory,deleteCategory}=require("../controller/blogcatCtrl");
const router=express.Router();
authMiddleware
createCate
router.post('/',authMiddleware,isAdmin,createCategory)
router.put('/:id',authMiddleware,isAdmin,updateCategory);
router.delete('/:',authMiddleware,isAdmin,deleteCategory);
router.get('/:id',getCategory);
router.get('/',getallCategory);
module.exports=router;
