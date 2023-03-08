const express=require("express")
const {createBlog,getAllBlog,getBlog,updateBlog,likeBlog, dislikeBlog,deleteBlog,uploadImages}=require("../controller/blogCtrl");
const {authMiddleware,isAdmin}=require("../middlewares/authMiddleware");
const {uploadPhoto,blogImgResize} =require('../middlewares/uploadimages')
// const uploadPhoto= require('../middlewares/uploadimages');
const router=express.Router();
router.post("/",authMiddleware,isAdmin,createBlog);
router.put("/likes",authMiddleware,isAdmin,likeBlog);

router.put("/upload/:id",authMiddleware,isAdmin,uploadPhoto.array('images',2),blogImgResize,uploadImages);

router.put("/dislikes",authMiddleware,isAdmin,dislikeBlog);
router.put("/:id",authMiddleware,isAdmin,updateBlog);
router.post("/:id",getBlog);
router.delete('/:id',authMiddleware,isAdmin,deleteBlog);
router.post("/",getAllBlog);

module.exports=router;