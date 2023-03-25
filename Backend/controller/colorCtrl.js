const Color=require('../models/colorModel');
const asyncHandler=require("express-async-handler");
const validateMongoDbId=require('../untils/validateMongodbId');

const createColor=asyncHandler(async(req,res)=>{
    try{
            const newColor=await Color.create(req.body);
            res.json(newColor);
    }catch(error){
        console.log("error Color backedn");
        throw new Error(error);

    }
})

const updateColor=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoDbId(id);
    try{
            const updateColor=await Color.findByIdAndUpdate(id,req.body,{new:true,});
            res.json(updateColor);
    }catch(error){
        console.log('error Color backend');
        throw new Error(error);

    }
})
const deleteColor=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoDbId(id);
    try{
            const deleteColor=await Color.findByIdAndDelete(id);
            res.json(deleteColor);
    }catch(error){
        console.log("error Color backedn");
        throw new Error(error);

    }
})
const getColor=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoDbId(id);
    try{
            const getColor=await Color.findById(id);
            res.json(getColor);
    }catch(error){
        console.log("error Color backedn");

        throw new Error(error);

    }
})
const getallColor=asyncHandler(async(req,res)=>{
    // const {id}=req.params;
    // validateMongoDbId(id);
    try{
            const getallColor=await Color.find();
            res.json(getallColor);
    }catch(error){
        console.log("error Color backedn");
        throw new Error(error);

    }
})

module.exports={createColor,updateColor,deleteColor,getColor,getallColor};
