const { generateToken } = require('../config/jwtToken');
const { generateRefreshToken } = require('../config/refreshToken');
const User = require('../models/userModel')
const jwt=require("jsonwebtoken");
generateRefreshToken
validateMongodbId
const createUser = async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
        const newUser = User.create(req.body);
        res.json(newUser);

    } else {
        throw new Error("user already exits");

    }
};
const loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    // check if user exists or not
    const findUser = await User.findOne({ email });
    if (findUser && (await findUser.isPasswordMatcheed(password))) {
        const refreshToken= await generateRefreshToken(findUser?._id);

        const updateuser=await User.findByIdAndUpdate(findUser.id,
            {
                refreshToken:refreshToken
            },
        );
        res.cookie('refreshToken',refreshToken,
         {httpOnly:true,
         maxAge:72*60*60*1000, 
         }
        )
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id),

        });
    } else {
        throw new Error("Invalid Credentials");
    }
});

const handleRefreshToken=asyncHandler(async(req,res)=>{
    const cookie=req.cookies;
    console.log(cookie);
    if(!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
    const refreshToken=cookie.refreshToken;
    const user= await User.findOne({
        refreshToken
    });
    if(!user) throw new Error("No Refresh token present in db or  not matched");
    jwt.verify(refreshToken,process.env.JWT_SECRET,(err,decoded =>{
        if(err || user.id !== decoded.id){
            throw new Error("there is something wrong with refresh token ")
        }
        const accessToken=generateToken(user?._id);
        res.json({accessToken});
        
    }))

})
//logout functionality
const logout=asyncHandler(async(req,res)=>{

})
const getallUser = asyncHandler(async (req, res) => {
    try {
        const getUsers = await User.find();
        res.json(getUsers);
    } catch (error) {
        throw new Error(error);
    }
}

);
const getaUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    console.log(id);
    validateMongodbId(id);
    try {
        const getaUser = await User.findById(id);
        res.json({
            getaUser,
        })
    } catch (error) {
        throw new Error(error);
    }
});

const deleteaUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    console.log(id);
    validateMongodbId(id);
    try {
        const getaUser = await User.findByIdAndDelete(id);
        res.json({
            deleteaUser,
        })
    } catch (error) {
        throw new Error(error);
    }
});
//Update a user
const updatedaUser = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    //  console.log(req.user);
    validateMongodbId(_id);
    console.log(id);
    try {
        const updatedaUser = await User.findByIdAndUpdate(_id, {
            firstname: req?.body?.firstname,
            lastname: req?.body?.lastname,
            email: req?.body?.email,
            mobile: req?.body?.mobile,
        });
        res.json({
            updatedaUser,
        })
    } catch (error) {
        throw new Error(error);
    }
});
const blockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const block = await User.findByIdAndUpdate(
            id,
            { isBlocked: true, }
            , { new: true }
        );
        res.json({
            message:"User Blocked",
        })
    } catch (error) {
        throw new Error(error);

    }
});
const unblockUser = asyncHandler(async (req, res) => {

    const { id } = req.params;
    validateMongodbId(id);
    try {
        const block = await User.findByIdAndUpdate(
            id,
            { isBlocked: true, }
            , { new: true }
        );
        res.json({
            message:"user unblocked"
        })
    } catch (error) {
        throw new Error(error);

    }
});


module.exports = { createUser, loginUserCtrl, getallUser, getaUser, deleteaUser, updatedaUser, blockUser, unblockUser,refreshToken,logout};