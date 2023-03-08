const Coupon=require("../models/couponModel");
const validateMongoDbId=require("../untils/validateMongodbId");

const asyncHandler=require("express-async-handler");
 
const createCoupon=asyncHandler(async(req,res)=>{
    try{
        const newCoupon=await Coupon.create(req.body);
        res.json(newCoupon);
    }catch(error){
        throw new Error(error);
    }
})
const getAllCoupon=asyncHandler(async(req,res)=>{
    try{
        const Coupon=await Coupon.find();
        res.json(Coupon);
    }catch(error){
        throw new Error(error);
    }
})
const updateCoupon=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoDbId(id);
    try{
        const updateCoupon=await Coupon.findByIdAndUpdate(id,req.body,{new:true});
        res.json(updateCoupon);
    }catch(error){
        throw new Error(error);
    }
})
const deleteCoupon=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoDbId(id);
    try{
        const deleteCoupon=await Coupon.findByIdAndDelete(id);
        res.json(deleteCoupon);
    }catch(error){
        throw new Error(error);
    }
})
module.exports={createCoupon,getAllCoupon,updateCoupon,deleteCoupon};