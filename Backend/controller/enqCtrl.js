const Enquiry=require('../models/enqModel');
const asyncHandler=require("express-async-handler");
const validateMongoDbId=require('../untils/validateMongodbId');

const createEnquiry=asyncHandler(async(req,res)=>{
    try{
            const newEnquiry=await Enquiry.create(req.body);
            res.json(newEnquiry);
    }catch(error){
        console.log("error Enquiry backedn");
        throw new Error(error);

    }
})

const deleteEnquiry=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoDbId(id);
    try{
            const deleteEnquiry=await Enquiry.findByIdAndDelete(id);
            res.json(deleteEnquiry);
    }catch(error){
        console.log("error Enquiry backedn");
        throw new Error(error);

    }
})
const getEnquiry=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoDbId(id);
    try{
            const getEnquiry=await Enquiry.findById(id);
            res.json(getEnquiry);
    }catch(error){
        console.log("error Enquiry backedn");

        throw new Error(error);

    }
})
const getallEnquiry=asyncHandler(async(req,res)=>{
    // const {id}=req.params;
    // validateMongoDbId(id);
    try{
            const getallEnquiry=await Enquiry.find();
            res.json(getallEnquiry);
    }catch(error){
        console.log("error Enquiry backedn");
        throw new Error(error);

    }
})

module.exports={createEnquiry,deleteEnquiry,getEnquiry,getallEnquiry};
