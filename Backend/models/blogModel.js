const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
        unique:true,
    },
    category:{
        type:String,
        required:true,
    },
    numViews:{
        type:String,
        default:0,
    },
    isLiked:{
        type:Boolean,
        default:false,
    },
    isDisliked:{
        type:Boolean,
        default:false,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }],
    dislikes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }],
    image:{
        type:String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fblog&psig=AOvVaw18NwIGiJGHRXWbyj0grKpo&ust=1678248988549000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIi-xej6yP0CFQAAAAAdAAAAABAD"

    },
    author:{
        type:String,
        default:"Admin",
    },
    images:[],
},
{toJSON:{
    virtuals:true,
},
toObject:{
    virtuals:true,
},
timestamps:true,});

//Export the model
module.exports = mongoose.model('Blog', blogSchema);