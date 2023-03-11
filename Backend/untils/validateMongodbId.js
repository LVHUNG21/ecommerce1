const mongoose=require("mongoose");
const { validate } = require("../models/userModel");
const validateMongodbId=(id)=>{
    const isValid =mongoose.Types.ObjectId.isValid(id);
    if(!isValid) throw new Error("khong tim thay  id, is not valid or not Found");
};
module.exports=validateMongodbId; 