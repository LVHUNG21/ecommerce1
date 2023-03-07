const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express=require('express');
const asyncHandler=require("express-async-handler")
const dbConnect = require('./config/dbConnect');
const ProductModel = require('./models/ ProductModel');
const app=express();
const dotenv=require('dotenv').config();
const authRouter=require('./routes/authRoute');
const blogRouter=require('./routes/blogRoute');
const productRouter=require('./routes/ProductRoute');
const categoryRouter=require('./routes/categoryRoute');
const blogcatRouter=require('./routes/blogcatRoute');
const brandRouter=require('./routes/brandRoute');
const couponRouter=require('./routes/couponRoute');
dbConnect();
const morgan=require("morgan");
const PORT =process.env.PORT|| 4000     ;
app.use(bodyParser.json);
app.use(morgan());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use("/api/blog",blogRouter);
app.use('/api/user',authRouter);
app.use('/api/product',productRouter);
app.use('/api/category',categoryRouter);
app.use('api/blogcategory',blogcatRouter);
app.use('/api/brand',brandRouter);
app.use('/api/coupon',);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`);

})