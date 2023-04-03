const express=require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {getEnquiry,getallEnquiry,createEnquiry,updateEnquiry,deleteEnquiry}=require("../controller/enqCtrl");
const router=express.Router();
router.post('/',createEnquiry)
router.put('/:id',authMiddleware,isAdmin,updateEnquiry);
router.delete('/:',authMiddleware,isAdmin,deleteEnquiry);
router.get('/:id',getEnquiry);
router.get('/',getallEnquiry);
module.exports=router;
