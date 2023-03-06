const express=require('express');
const { createUser, loginUserCtrl, getaUser, deleteaUser, updatedaUser, unblockUser, blockUser ,handlerRefreshToken, logout} = require('../controller/useCtrl');
const router=express.Router();
const {authMiddleware,isAdmin}= require("../middlewares/authMiddleware");
createUser
router.post('/register',createUser);
router.post('/login',loginUserCtrl);
router.get("/all-users,getallUser");
router.get("/:id",authMiddleware,isAdmin,getaUser);
router.delete("/:id",deleteaUser);
router.get("/logout",logout);
router.put("/edit-user",authMiddleware,updatedaUser);
router.put("/block-user/:id",authMiddleware,isAdmin,blockUser);
router.put("/unblock-user/:id",authMiddleware,isAdmin,unblockUser);
router.put("/refresh",handlerRefreshToken,isAdmin,unblockUser);
module.exports=router;