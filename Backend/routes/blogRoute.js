const express=require("express")
const {createBlog,getAllBlog,getBlog,updateBlog,likeBlog, deleteBlog,uploadImages}=require("../controller/blogCtrl");
const {authMiddleware,isAdmin}=require("../middleware/authMiddleware");
const {blogImgResize} =require('../middlewares/uploadimages')
const router=express.Router();
router.post("/",authMiddleware,isAmin,createBlog);
router.put("/likes",authMiddleware,isAmin,likeBlog);

router.put("/upload/:id",authMiddleware,isAdmin,uploadPhoto.array('images',2),blogImgResize,uploadImages);

router.put("/dislikes",authMiddleware,isAmin,dislikeBlog);
router.put("/:id",authMiddleware,isAmin,updateBlog);
router.post("/:id",getBlog);
router.delete('/:id',authMiddleware,isAdmin,deleteBlog);
router.post("/",getAllBlog);

module.exports=router;