const bCategory=require('../models/blogcatmodel.js');
const asyncHandler=require("express-async-handler");
const validateMongoDbId=require('../untils/validateMongodbId');

const createCategory=asyncHandler(async(req,res)=>{
    try{
            const newCategory=await bCategory.create(req.body);
            res.json(newCategory);
    }catch(error){
        throw new Error(error);

    }
})

const updateCategory=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoDbId(id);
    try{
            const updateCategory=await bCategory.findByIdAndUpdate(id,req.body,{new:true,});
            res.json(updateCategory);
    }catch(error){
        throw new Error(error);

    }
})
const deleteCategory=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoDbId(id);
    try{
            const deleteCategory=await bCategory.findByIdAndDelete(id);
            res.json(deleteCategory);
    }catch(error){
        throw new Error(error);

    }
})
const getCategory=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoDbId(id);
    try{
            const getCategory=await bCategory.findById(id);
            res.json(getCategory);
    }catch(error){
        throw new Error(error);

    }
})
const getallCategory=asyncHandler(async(req,res)=>{
    try{
            const getallCategory=await bCategory.find();
            res.json(getallCategory);
    }catch(error){
        throw new Error(error);

    }
})

module.exports={createCategory,updateCategory,deleteCategory,getCategory,getallCategory};
